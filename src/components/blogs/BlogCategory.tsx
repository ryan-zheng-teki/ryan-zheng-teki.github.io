import React from 'react';
import { Link } from 'react-router-dom';



export interface BlogCategory {
    link: string;
    text: string;
}
export class BlogCategory extends React.Component<BlogCategory,{}> {
    constructor(props: BlogCategory) {
        super(props);
    }

    render() {
        return  <Link to={ this.props.link }>{this.props.text}</Link>
    }
}

