import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Query, QueryResult } from 'react-apollo';

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

const GET_LATEST_BLOGS = gql`
  query GetLatestBlogs($latest: Int!){
    latestBlogs(latest: $latest) {
      summary
      content
      title
    }
  }
`;

export const BlogContent:React.SFC= () => {

  return (
    <CurrentCategoryContext.Consumer>
      {
          ({ currentCategory }) => {
            if(currentCategory === null) {// show the latest blogs. if there are no latest blogs, then show the author is very lazy.
              return (
                <Query query={GET_LATEST_BLOGS}>
                  {
                  ({ loading, error, data }: QueryResult<GetBlogsForCategory.GetBlogsForCategory>) => {
                    if(loading) return <p>loading</p>;
                    if(error) return <p>error</p>;
                    if(!data) return <p>Not Found</p>;
                    
                    return (
                      data && d
                    );
                  }
                }
                </Query>);
            } 
            return <p>Keep loading</p>;     
          }
        }
    </CurrentCategoryContext.Consumer>
  );
};