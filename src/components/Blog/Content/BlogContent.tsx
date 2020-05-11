import React from 'react';
import gql from 'graphql-tag';
import { BlogList_blogs as Blogs } from 'Generated/BlogList';
import * as Globals from '../../../constants';

import { CurrentCategoryContext } from '../Context/CategoryContext';
import { BlogsForCategoryQuery } from '../queries';


interface BlogContentProps {
  pagedBlogs: Blogs
}

export const BlogContent:React.FC<BlogContentProps> = ({ pagedBlogs }) => {
  return (
    <div className="blog__content">
      <CurrentCategoryContext.Consumer>
        {
            ({ currentCategory }) => {
              if(currentCategory === undefined || currentCategory === null) {
                if(pagedBlogs.edges.length > 0) {
                  const blogsElement =  pagedBlogs.edges.map((blog) => {
                    return <p key={blog.node.id}>{blog.node.content}</p>;
                  });
                  return <>{blogsElement}</>;
                }
                return <p>The author is too lazy, he does not have any blogs currrently</p>;
              } 
              return (
                <BlogsForCategoryQuery
                  variables={{ categoryId: currentCategory }}
                > 
                  {
                          ({ data }) => {
                            if(data && data.blogsForCategory && data.blogsForCategory.length > 0) {
                              const blogs =  data && data.blogsForCategory.map((blog) => {
                                return <p key={blog.id}>{blog.content}</p>;
                              });
                              return <>{blogs}</>;
                            } 
                            return <p>The author has not created any blogs for {currentCategory}</p>;
                          }
                        }
                </BlogsForCategoryQuery>
              );
            }
        }
      </CurrentCategoryContext.Consumer>
    </div>
  );
};