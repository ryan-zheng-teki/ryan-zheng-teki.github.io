import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Query } from '@apollo/react-components';
import * as GetBlogsForCategory from 'Generated/GetBlogsForCategory';
import * as GetLatestBlogs from 'Generated/GetLatestBlogs';
import gql from 'graphql-tag';
import * as Globals from '../../../constants';

import { CurrentCategoryContext } from '../CategoryContext';

/*
show the latest five blogs.If current categor is empty, then show the latest 5 blogs.
After i click the category, i should send a request to server to get all the blog files
for the category. And show the blogs for the file
*/

const GET_BLOGS_FOR_CATEGORY = gql`
  query BlogsForCategory($categoryId: String!){
    blogsForCategory(categoryId: $categoryId) {
      content
    }
  }
`;

const GET_LATEST_BLOGS = gql`
  query LatestBlogs($latest: Int!){
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
                <Query<GetLatestBlogs.GetLatestBlogs, GetLatestBlogs.GetLatestBlogsVariables>
                  query={GET_LATEST_BLOGS}
                  variables={{ latest: Globals.pagingSize }}
                >
                  {
                  ({ loading, error, data }) => {
                    if(loading) return <p>loading</p>;
                    if(error) return <p>error</p>;
                    if(!data) return <p>Not Found</p>;
                    
                    if(data && data.latestBlogs) {
                      const blogs =  data && data.latestBlogs.map((blog) => {
                        return <p key={blog.content}>{blog.content}</p>;
                      });
                      return <>{blogs}</>;
                    } 
                    return <p>The author is very lazy to write anything in his blogs</p>;
                    
                  }
                }
                </Query>);
            } 
            // I need to return the selected blogs for the category
            return (
              <Query<GetBlogsForCategory.GetBlogsForCategory, GetBlogsForCategory.GetBlogsForCategoryVariables>
                query={GET_BLOGS_FOR_CATEGORY}
                variables={{ categoryId: currentCategory }}
              > 
                {
                   ({ loading, error, data }) => {
                     return <p>Hellow world</p>;
                   }
                }
              </Query>
            );
          }
        }
    </CurrentCategoryContext.Consumer>
  );
};