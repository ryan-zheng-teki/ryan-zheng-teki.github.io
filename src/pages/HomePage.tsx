import {
  BlogArchive,
  BlogCategoryNavigator,
  BlogContent,
  CurrentCategoryProvider,
} from 'AppComponents';
import * as React from 'react';
import { HomePageQuery } from './queries';

export const HomePage: React.FC = () => {
  return (
    <HomePageQuery>
      {({ data }) => {
        return (
          <div className="page__blog">
            <CurrentCategoryProvider>
              <BlogCategoryNavigator categories={data.categories} />
              <BlogContent pagedBlogs={data.blogs} />
            </CurrentCategoryProvider>
            <BlogArchive />
          </div>
        );
      }}
    </HomePageQuery>
  );
};
