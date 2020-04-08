/* eslint-disable no-unused-vars */
import parser from 'fast-xml-parser';
import he from 'he';
import blog_categories from 'AppConfig/blog-categories.xml';
import { WorkNode, NodeTag } from './WorkNode';
import React from 'react';

let options = {
    attributeNamePrefix: '',
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : false,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val: any, attrName: any) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : (val: any, tagName: any) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
};

export function loadBlogCategories(): any {
    if( parser.validate(blog_categories) === true) { //optional (it'll return an object in case it's not valid)
        let categories = parser.parse(blog_categories, options);
        return categories;
    }
}


/*
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
        <li>React E.ement onClick()</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>

For the current node. It start beginWork function. 

It checks if the current node contains any children.
If the current node name is File, then call construct file element. After construct FileElement. Then it must be leaf node.
if(node.name === 'File') {
    createFileElement();
}

if(node.sibling != empty) {
    return sibling
}

if(node.sibling == empty) {
    return finishWork(node)
}

then React.createElement('li',node.name). 
if(node.chidlren != empty) {
    createNodesForTheChilren()
    return the firstChildAsNextWork.
} else {
    //no children, empty folder
    return finishWork(node)
}
*/

export function buildBlogCategoryMenu(categoryXml: any):any {
    let rootNode: WorkNode = createRootNode(categoryXml);
    let nextWork = rootNode;

    while(nextWork != null) {
        nextWork = beginWork(nextWork);
    }

    return rootNode.reactElement;
}

function beginWork(currentNode: WorkNode): WorkNode {
    //check if we already reached File node.
    if(currentNode.name === 'File') {
        createFileReactElement(currentNode);
         //check if sibling exist
        if(currentNode.next != null) {
            return currentNode.next;
        } else {
            //there is no sibling for the current node
            return finishWork(currentNode);
        }
    }

    //current node is a directory node.
    //leaf node.
    let keys = Object.keys(currentNode.xmlContent);
    let childNodesArray = [];
    if(keys.length !== 0) {
        let siblingNode = null;
        for(let i = keys.length - 1; i >= 0; i--) {
            let childNode = createChildNode(keys[i], currentNode,siblingNode);
            childNodesArray.push(childNode);
            siblingNode = childNode;
        }
        currentNode.children = childNodesArray;
        //return the first node for the children.
        return siblingNode;
    } else {
        //current node is empty
        createDirReactElement(currentNode);
        return finishWork(currentNode);
    }
}

function createChildNode(name: string, parentNode: WorkNode,siblingNode: WorkNode): WorkNode {
    let childNode: WorkNode = {
            name: name,
            parentNode: parentNode,
            next: siblingNode,
            tag: NodeTag.DIR_FLAG,
            reactElement: null,
            children: null,
            xmlContent: parentNode.xmlContent[name],
        };
    if(name === 'File') {
        childNode.tag = NodeTag.FILE_FLAG;
    }
    return childNode;
}
/* 
FinishWork for the current node.
if( currentNode is FileNode) 
    set nextWork to be currentNode.parent. It's parent must be a dir node
    continue


if(currentNode has no sibling)
{ 
    if(currentNode has children) {
        processNestedParentNode(currentNode);
    }
    nextWork = node.parent;
    continue;
} 

if(currentNode has sibling) {
    if(currentNode has children) {
        processNestedParentNode(currentNode);
    }
    return node.next;
}
*/
function finishWork(currentNode:WorkNode): WorkNode {
    let nextWork = currentNode;
    while(nextWork != null) {
        //this is file node. We continue with parentNode. Because all FileNodes are already processed in beginWork
        if(nextWork.tag & NodeTag.FILE_FLAG) {
            nextWork = nextWork.parentNode;
            continue;
        }

        if(nextWork.next != null) {
            if(nextWork.children != null) {
                processNestedParentNode(nextWork);
            }
            return nextWork.next;
        }

        //no sibling
        if(nextWork.children != null) {
            processNestedParentNode(nextWork);
        }
        nextWork = nextWork.parentNode;
        continue;
    }
    //nextWork is null, which means that we have processed the root node.
    return null;
}

/*
create root node
*/
function createRootNode(categoryXml: any): WorkNode {
    let rootCategory = Object.keys(categoryXml)[0];
    return {
        name: rootCategory,
        parentNode: null,
        next: null,
        tag: NodeTag.DIR_FLAG,

        //we have to set the values to null temporarily. We will set the values later.
        children:null,
        reactElement: null,
        xmlContent: categoryXml[rootCategory],
    }
} 

function processNestedParentNode(node: WorkNode) {
    let childrenElements = node.children.map(function(val, index){ 
        return val.reactElement;
        });

    let ulElement = React.createElement('ul',null, childrenElements);
    node.reactElement = React.createElement('li',{className: node.name }, [node.name, ulElement]);
}

function createDirReactElement(node:WorkNode) {
    let element = React.createElement('li',{ className: node.name }, node.name);
    node.reactElement = element;
}

function createFileReactElement(node:WorkNode) {
    let fileName = node.xmlContent.name;
    let element = React.createElement('li',{ className: node.name, onClick: navigateToFile }, fileName);
    node.reactElement = element;
}

function navigateToFile(path:string) {
    /*
    When i click the onClick of the file. Then i should load the file content from the path. And then replace the middle content of the blog
    page with the content of this file.
    */
   console.log('get clicked');
}
