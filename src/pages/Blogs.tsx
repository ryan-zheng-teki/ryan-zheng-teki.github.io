import * as React from 'react';
import { BlogCategoryNavigator, MarkdownDisplayer } from 'AppComponents';
export class Blogs extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    /* TODO:
    (1)build a nested ul for categories.
    (2)Build a list of all blogs files sorted by modifiedTime
    (3)When user didn't click any category, then show the latested 5 blogs.
    (4)build a timeseries which shows how many blogs in each timeseries.
    */
    
    render() {
        return (
            <React.Fragment>
                <BlogCategoryNavigator/>
            </React.Fragment>
        );
    }
}