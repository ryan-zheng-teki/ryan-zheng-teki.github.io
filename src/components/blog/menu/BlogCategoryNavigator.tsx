import React from 'react';
import { WorkNode } from '../types';
import { BlogMenuItem } from './BlogMenuItem';
import * as BlogCategoryService from '../BlogCategoryService';

export class BlogCategoryNavigator extends React.Component<{},{}> {
    constructor(props: any) {
        super(props);
    }

    createRootMenus() {
        let rootCategory = BlogCategoryService.loadBlogCategories();
        let rootWorkNode = BlogCategoryService.buildBlogCategoryMenu(rootCategory);

        let menuItems;
        if(rootWorkNode.workNodeChildren != undefined) {
            menuItems = rootWorkNode.workNodeChildren.map((childNode: WorkNode) => {
                return <BlogMenuItem workNode={childNode} />;
            })
        }
        return <ul className='blog__navigator'>{ menuItems}</ul>
    }

    render() {
        return this.createRootMenus();
    }   
}
