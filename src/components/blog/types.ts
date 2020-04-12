import { ReactNode } from 'react';
export enum NodeTag {
    DIR_FLAG = 1,
    FILE_FLAG = 2
}

export interface WorkNode
{     
    name: string;
    path?: string,
    parentNode: WorkNode,
    next: WorkNode,
    createdTime?: Date,
    modifiedTime?: Date,
    workNodeChildren: WorkNode[],
    tag: NodeTag,

    //the reactElement this WorkNode has
    reactElement: any, 
    xmlContent: any,

    //If the node is one of array, index records the index in the array
    index?: number,

    //this is to be compatible with
    children?: ReactNode[],
}

export interface BlogMenuProps {
    workNode: WorkNode,
}

