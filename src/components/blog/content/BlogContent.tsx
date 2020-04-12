import React from 'react';
import { WorkNode } from '../types';

export class BlogContent extends React.Component<{},{}> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentSelectedBlog: null,
        }
    }


    showAllBlogsInCategory(workNode: WorkNode) {
        let summaries = workNode.workNodeChildren.map((fileNode: WorkNode) => {
            return <div>fileNode.name</div>
        });
        return summaries;
    }


    render() {
        return <p className='blogContent'>Still considering what to show here</p>
    }
}