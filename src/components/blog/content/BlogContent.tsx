import React from 'react';
import { WorkNode } from '../types';
import { CurrentCategoryContext } from 'AppComponents';

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


    /*
    Here i should call apollo useQuery hook cache only method to get the currently selected category.
    If there is no selected category, then i should fire another query to get the latest 5 blogs and show them here
    */
    render() {
        return (
            <CurrentCategoryContext.Consumer>
                {(currentCategory: WorkNode) => {
                    if(currentCategory == null) {
                        return <p> Still consider what to show</p>
                    } else {
                        return <p>Show the current category</p>
                    }
                }}
            </CurrentCategoryContext.Consumer>
        );
    }
}