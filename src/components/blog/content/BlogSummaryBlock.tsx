import React from 'react';
import { WorkNode } from '../types';
import { getFileName, UpdateReadBlog } from '../BlogCategoryService';


interface BlogSummaryProps {
    fileNode: WorkNode
    updateReadBlog: UpdateReadBlog
  }

export class BlogSummaryBlock extends React.Component<BlogSummaryProps,{}>
{
    constructor(props:BlogSummaryProps) {
        super(props);
        this.fileClickListener = this.fileClickListener.bind(this);
    }

    fileClickListener(event: any , fileNode: WorkNode) {
        event.preventDefault();
        this.props.updateReadBlog(fileNode);
    }

    render() {
        const {fileNode, updateReadBlog} = this.props;
        return (
            <div className='blogfile__summary'>
                <a href='#' onClick={(event) => { this.fileClickListener(event, fileNode)}}>{getFileName(fileNode)}</a>
            </div>
        )
    }
  
}