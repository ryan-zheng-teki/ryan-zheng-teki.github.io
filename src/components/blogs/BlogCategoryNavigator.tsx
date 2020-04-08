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
        return rootElement;
    }

    render() {
        return this.createNavigationMenus();
    }   
}
