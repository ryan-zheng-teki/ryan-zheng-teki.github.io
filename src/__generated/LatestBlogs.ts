/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestBlogs
// ====================================================

export interface LatestBlogs_latestBlogs {
  __typename: "BlogItem";
  summary: string;
  content: string;
  title: string;
}

export interface LatestBlogs {
  latestBlogs: (LatestBlogs_latestBlogs | null)[] | null;
}

export interface LatestBlogsVariables {
  latest: number;
}
