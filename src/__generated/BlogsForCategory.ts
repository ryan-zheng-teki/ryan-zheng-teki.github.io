/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogsForCategory
// ====================================================

export interface BlogsForCategory_blogsForCategory {
  __typename: "BlogItem";
  content: string;
}

export interface BlogsForCategory {
  blogsForCategory: (BlogsForCategory_blogsForCategory | null)[] | null;
}

export interface BlogsForCategoryVariables {
  categoryId: string;
}
