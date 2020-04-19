import React from 'react';
import { WorkNode, NodeTag } from '../types';
import { CurrentCategoryContext, CategoryProviderState } from '../CategoryContext';
import { getFileNodePath, UpdateReadBlog } from '../BlogCategoryService';
import { BlogSummaryBlock } from './BlogSummaryBlock';
export class BlogContent extends React.Component<{}, {currentReadBlog: WorkNode}> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentReadBlog: null,
        }
        this.updateCurrentReadingBlog = this.updateCurrentReadingBlog.bind(this);
    }

    updateCurrentReadingBlog(currentReadBlog: WorkNode): void {
        this.setState({currentReadBlog})
    }

    //What to do here. Dynamically import the files for the category. And show them in the middle
    //I have to construct the path for each node.
    showAllBlogsInCategory(workNode: WorkNode) {
        if(workNode == null || workNode.workNodeChildren == null || workNode.workNodeChildren[0].tag & NodeTag.DIR_FLAG) {
            return <p>Show latest 5 blogs</p>
        }

        let summaries = workNode.workNodeChildren.map((fileNode: WorkNode) => {
            if(fileNode.tag & NodeTag.FILE_FLAG ) // is file node
            { 
                const blogSummaryBlockProp = {
                    fileNode: fileNode,
                    updateReadBlog: this.updateCurrentReadingBlog
                }
                return <BlogSummaryBlock  { ...blogSummaryBlockProp } />
            }
        });

        return <div className='summaries__block'>
            {summaries}
        </div>
    }


    loadBlogFile() {
        if(this.state.currentReadBlog != null) {
            const filePath = '../../../' + getFileNodePath(this.state.currentReadBlog);
            console.log(filePath);

            import('../../../blogs/Frameworks/Frontend/React/ReactSourceCodeAnalysis/Part1 React Element.md')
            .then((content) => {
                console.log(content);
            });

            import(filePath)
            .then((content) => {
                console.log(content);
            });
        }
    }


    /*
    Here i should call apollo useQuery hook cache only method to get the currently selected category.
    If there is no selected category, then i should fire another query to get the latest 5 blogs and show them here
    */
    render() {
            if(this.state.currentReadBlog == null) {
                return (
                    <CurrentCategoryContext.Consumer>
                    { 
                        ({ currentCategory }: CategoryProviderState) => 
                            (
                                <div className="blogContent">
                                    {this.showAllBlogsInCategory(currentCategory)}
                                </div>
                            )
                    }
                    </CurrentCategoryContext.Consumer>
                );
            } else {
                this.loadBlogFile();
                //What i need to do here is to dynamically import the file and then show it using markdown.
                return <p>User selected file {this.state.currentReadBlog.name}</p>
            }   
    }
}