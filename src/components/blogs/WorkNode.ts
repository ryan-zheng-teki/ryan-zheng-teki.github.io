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
    children: WorkNode[],
    tag: NodeTag,
    reactElement: any, 
    xmlContent: any,
}