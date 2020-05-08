import gql from 'graphql-tag';
import * as GetBlogsForCategory from 'Generated/BlogsForCategory';
import { TypedQuery } from '../../core/queries';

const GET_BLOGS_FOR_CATEGORY = gql`
  query BlogsForCategory($categoryId: String!){
    blogsForCategory(categoryId: $categoryId) {
        id
        content
    }
  }
`;

export const BlogsForCategoryQuery = TypedQuery<GetBlogsForCategory.BlogsForCategory, 
GetBlogsForCategory.BlogsForCategoryVariables>(GET_BLOGS_FOR_CATEGORY);
