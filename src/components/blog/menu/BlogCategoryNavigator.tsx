import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import * as GetCategoriesTypes from 'Generated/GetCategories';
import { BlogMenuItem } from './BlogMenuItem';
import { CurrentCategoryContext } from '../CategoryContext';


const GET_CATEGORIES = gql`
    query GetCategories  {
        categories{
            name
            subCategories {
                name
            } 
        }
}
`;

export const  BlogCategoryNavigator:React.FC<{}> = () => {
  const {
    data,
    loading,
    error
  } = useQuery<GetCategoriesTypes.GetCategories>(GET_CATEGORIES);

  
  if(loading) return <p>loading</p>;
  if(error) return <p>error</p>;
  if(!data) return <p>Not Found</p>;


  return (
    <div className="blog__navigator">
      {
                data.categories && 
                data.categories.map((category) => {
                  return <BlogMenuItem key={category.name} category={category} />; 
                })
      }
    </div>
  );
};