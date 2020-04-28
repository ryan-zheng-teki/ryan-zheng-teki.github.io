/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categories_subCategories {
  __typename: "BlogCategory";
  name: string;
}

export interface GetCategories_categories {
  __typename: "BlogCategory";
  name: string;
  subCategories: (GetCategories_categories_subCategories | null)[] | null;
}

export interface GetCategories {
  categories: (GetCategories_categories | null)[];
}
