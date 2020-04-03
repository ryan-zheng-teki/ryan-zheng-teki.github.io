import React from 'react';
import blog_categories from 'AppConfig/blog-categories.json';
export class BlogCategoryNavigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoies: blog_categories,
        }
        console.log(blog_categories);
        console.log('called here');
    }

    createCategoryNode() {
        
    }

    render() {
        return '';
    }   
}