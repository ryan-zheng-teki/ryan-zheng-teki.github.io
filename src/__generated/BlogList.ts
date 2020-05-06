/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogList
// ====================================================

export interface BlogList_blogs_edges_node {
  __typename: "BlogItem";
  id: string;
  summary: string;
  content: string;
}

export interface BlogList_blogs_edges {
  __typename: "BlogItemConnectionEdge";
  cursor: string | null;
  node: BlogList_blogs_edges_node | null;
}

export interface BlogList_blogs_pageInfo {
  __typename: "PageInfo";
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface BlogList_blogs {
  __typename: "BlogItemConnection";
  edges: (BlogList_blogs_edges | null)[] | null;
  pageInfo: BlogList_blogs_pageInfo | null;
}

export interface BlogList_categories_subCategories {
  __typename: "BlogCategory";
  id: string;
  name: string;
}

export interface BlogList_categories {
  __typename: "BlogCategory";
  id: string;
  name: string;
  subCategories: (BlogList_categories_subCategories | null)[] | null;
}

export interface BlogList {
  blogs: BlogList_blogs | null;
  categories: (BlogList_categories | null)[];
}

export interface BlogListVariables {
  cursor?: string | null;
}
