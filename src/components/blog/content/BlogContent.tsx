import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as GetBlogsForCategory from 'Generated/GetBlogsForCategory';
import gql from 'graphql-tag';
import { CurrentCategoryContext } from '../CategoryContext';

/*
show the latest five blogs.If current categor is empty, then show the latest 5 blogs.
After i click the category, i should send a request to server to get all the blog files
for the category
*/

const GET_BLOGS_FOR_CATEGORY = gql`
  query GetBlogsForCategory($categoryId: String!){
    blogsForCategory(categoryId: $categoryId) {
      content
    }
  }
`;

export const BlogContent:React.SFC= () => {
  const {
    data,
    loading,
    error
  } = useQuery<GetBlogsForCategory.GetBlogsForCategory, GetBlogsForCategory.GetBlogsForCategoryVariables>(GET_BLOGS_FOR_CATEGORY);
  return (
    <CurrentCategoryContext.Consumer>
      {
          ({ currentCategory }) => {
            if(currentCategory === null) {
              return <p>Loading</p>;
            }
            return <p>Keep loading</p>;
          }
        }
    </CurrentCategoryContext.Consumer>
  );
};