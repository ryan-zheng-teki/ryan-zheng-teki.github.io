import React from 'react';
import { WorkNode } from './WorkNode';
import * as BlogCategoryService from './BlogCategoryService';

export class BlogCategoryNavigator extends React.Component<{},{}> {
    constructor(props: any) {
        super(props);
    }

    createNavigationMenus() {
        let categoryXml = BlogCategoryService.loadBlogCategories();
        let rootElement = BlogCategoryService.buildBlogCategoryMenu(categoryXml);
        let childrenElements =  rootElement.children.map(function(val: WorkNode, index:any){ 
            return val.reactElement;
            });
        return  React.createElement('ul',null, childrenElements);
    }


    render() {
        return this.createNavigationMenus();
    }   
}
