import React from 'react';
import blog_categories from 'AppConfig/blog-categories.json';
import { BlogCategoryModel } from './BlogCategoryModel';
import * as BlogCategoryService from './BlogCategoryService';

export class BlogCategoryNavigator extends React.Component<{},BlogCategoryModel> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        BlogCategoryService.loadBlogCategories();
    }

    render() {
        return '';
    }   
}