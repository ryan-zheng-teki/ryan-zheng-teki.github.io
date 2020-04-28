import * as React from 'react';
import {
  BlogCategoryNavigator,
  BlogContent,
  BlogDateSelector,
  CurrentCategoryProvider,
} from 'AppComponents';

export const Blogs: React.SFC<{}> = ()=>{
  /* TODO:
    (1)build a nested ul for categories.
    (2)Build a list of all blogs files sorted by modifiedTime
    (3)When user didn't click any category, then show the latested 5 blogs.
    (4)build a timeseries which shows how many blogs in each timeseries.
    */
 
  return (
    <div className="page__blog">
      <CurrentCategoryProvider>
        <BlogCategoryNavigator />
        <BlogContent />
      </CurrentCategoryProvider>
      <BlogDateSelector />
    </div>
  );
};
