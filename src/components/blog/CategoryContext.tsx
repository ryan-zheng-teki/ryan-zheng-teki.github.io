import React, { useState } from 'react';

export type CategoryProviderState = {
  currentCategory: string | undefined,
  setCurrentCategory: React.Dispatch<unknown>,
};


export const CurrentCategoryContext = React.createContext<CategoryProviderState>(undefined);

function CurrentCategoryProvider({ children }: { children: React.ReactNode }) {
  const [currentCategory, setCurrentCategory] = useState(undefined);

  return (
    <CurrentCategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </CurrentCategoryContext.Provider>
  );
}


export default CurrentCategoryProvider;