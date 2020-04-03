import React from 'react';
import { Link } from 'react-router-dom';
import { BlogCategoryModel } from './BlogCategoryModel';



export class BlogCategory extends React.Component<BlogCategoryModel,{}> {
    constructor(props: BlogCategoryModel) {
        super(props);
    }

    render() {
        return  <Link to={ this.props.link }>{this.props.text}</Link>
    }
}

