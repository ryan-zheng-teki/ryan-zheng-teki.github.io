import * as React from 'react';
import { BlogCategoryNavigator, MarkdownDisplayer } from 'AppComponents';
export class Blogs extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <React.Fragment>
                <BlogCategoryNavigator/>
                <MarkdownDisplayer />
            </React.Fragment>
        );
    }
}