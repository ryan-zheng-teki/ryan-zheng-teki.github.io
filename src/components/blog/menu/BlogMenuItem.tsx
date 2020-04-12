import React, { ReactNode } from 'react';
import { BlogMenuProps, NodeTag, WorkNode } from '../types';


export class BlogMenuItem extends React.Component<BlogMenuProps, {}> {
    constructor(props: BlogMenuProps) {
        super(props);
        this.itemClickHandler = this.itemClickHandler.bind(this);
    }

    itemClickHandler(event: any, workNode: WorkNode) {
        event.stopPropagation();  
        console.log('clicked ',workNode.path);
    }

    /*
    (1)Do not show files on the left menu
    (2)When user click the menu item. If it contains files nodes. Then React should load those files dynamically to 
    And we will create a square with title contains the name of the file.When user click the blick. We should load the file content using
    markdown displayer. Then i should show a block for showing the content of the in the middle page. 
    */

    /*In MenuItemComponent. We check if this item contains a list of children. 
    If it does. Then we put a MenuList as a child of this mene item
    */
    generateMenuItems(): any {
        let workNode = this.props.workNode;
        let menuItems;
        if(workNode.workNodeChildren != undefined && workNode.workNodeChildren[0].tag != NodeTag.FILE_FLAG) {
            menuItems = workNode.workNodeChildren.map((childNode) => {
                return <BlogMenuItem workNode={childNode} />;
            })
        }
    
        return <li onClick={(event) => this.itemClickHandler(event,this.props.workNode)}>{this.props.workNode.name}
                { menuItems != null? <ul>{ menuItems}</ul>: ''}
            </li>   
    }

    render() {
        return this.generateMenuItems();
    }

}