import gql from 'graphql-tag';
import * as BlogListTypes from 'Generated/BlogList';
import { TypedQuery } from '../core/queries';

export const homePageQuery = gql`
query BlogList($cursor: String) {
    blogs(first: 10, after: $cursor) {
      edges {
        cursor
        node {
            id
            summary
            content
        }
      }
    pageInfo {
        hasPreviousPage
        hasNextPage
        }
    }
    categories{
        id
        name
        subCategories {
            id
            name
        } 
    }
}
`;
export const HomePageQuery = TypedQuery<BlogListTypes.BlogList, {}>(homePageQuery);
