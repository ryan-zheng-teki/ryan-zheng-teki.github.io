import * as React from 'react';
import {
  BlogCategoryNavigator,
  BlogContent,
  BlogDateSelector,
  CurrentCategoryProvider,
} from 'AppComponents';
import { HomePageQuery } from './queries';

export const HomePage: React.FC = ()=>{
  return (
    <HomePageQuery>
      {
        ({ data }) => {
          return (
            <div className="page__blog">
              <CurrentCategoryProvider>
                <BlogCategoryNavigator categories={data.categories} />
                <BlogContent pagedBlogs={data.blogs} />
              </CurrentCategoryProvider>
              <BlogDateSelector />
            </div>
          );
        } 
    }
    </HomePageQuery>

  );
};
