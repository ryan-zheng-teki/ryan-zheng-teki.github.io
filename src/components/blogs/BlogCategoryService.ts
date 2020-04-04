/* eslint-disable no-unused-vars */
import parser from 'fast-xml-parser';
import he from 'he';
import blog_categories from 'AppConfig/blog-categories.xml';
import { BlogCategoryModel } from './BlogCategoryModel';


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

export function loadBlogCategories(): BlogCategoryModel {
    if( parser.validate(blog_categories) === true) { //optional (it'll return an object in case it's not valid)
        let categories = parser.parse(blog_categories, options);
        buildBlogCategoriesModel(categories.categories);
    }
    return null;
}

function buildBlogCategoriesModel(categories: any) {

    //initialize the variables
    let next = null;
    let parent = null;
    let sibling = null;

    while(next != null) {
        let keys: string[] = Object.keys(next);

        //this node is a leaf node.
        if(keys.length == 1) {
            let blogCategory: BlogCategoryModel = {
                link: categories[keys[0]].to,
                text: categories[keys[0]].text,
            }
            blogCategory.parent = parent;
            next = null;
        }
    }
}


