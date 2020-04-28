import React from 'react';
import * as   GetCategoriesTypes from 'Generated/GetCategories';

export interface BlogMenuProps {
  category: GetCategoriesTypes.GetCategories_categories,
}


export const BlogMenuItem: React.FC<BlogMenuProps> = ({ category }) => {
  return (
    <ul className="blog__category">{category.name}
      {
          category.subCategories.map((subCategory) => { 
            return (
              <li key={subCategory.name} className="blog__category__item">
                {subCategory.name}
              </li>
            );
          })
        }
    </ul>
  );
};