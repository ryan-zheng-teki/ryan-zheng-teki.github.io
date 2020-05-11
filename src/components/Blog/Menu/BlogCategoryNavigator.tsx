import { BlogList_categories as BlogCategory } from 'Generated/BlogList';
import React from 'react';
import { BlogMenuItem } from './BlogMenuItem';

interface BlogCategoryNavigatorProps {
  categories: BlogCategory[];
}

export const BlogCategoryNavigator: React.FC<BlogCategoryNavigatorProps> = ({
  categories,
}) => {
  return (
    <div className="blog__navigator">
      {categories.map((category) => {
        return <BlogMenuItem key={category.name} category={category} />;
      })}
    </div>
  );
};
