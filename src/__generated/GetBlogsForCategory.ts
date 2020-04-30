/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBlogsForCategory
// ====================================================

export interface GetBlogsForCategory_blogsForCategory {
  __typename: "BlogItem";
  content: string;
}

export interface GetBlogsForCategory {
  blogsForCategory: (GetBlogsForCategory_blogsForCategory | null)[] | null;
}

export interface GetBlogsForCategoryVariables {
  categoryId: string;
}
