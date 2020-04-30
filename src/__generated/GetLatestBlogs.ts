/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLatestBlogs
// ====================================================

export interface GetLatestBlogs_latestBlogs {
  __typename: "BlogItem";
  summary: string;
  content: string;
  title: string;
}

export interface GetLatestBlogs {
  latestBlogs: (GetLatestBlogs_latestBlogs | null)[] | null;
}

export interface GetLatestBlogsVariables {
  latest: number;
}
