export interface BlogCategoryModel
{     
    link?: string;    
    text: string; 
    children?: BlogCategoryModel[];
    parent?: BlogCategoryModel;
}