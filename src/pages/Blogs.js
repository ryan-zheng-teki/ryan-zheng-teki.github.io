import React from 'react';
import { BlogCategoryNavigator } from 'components';
export class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <BlogCategoryNavigator/>
        );
    }
}