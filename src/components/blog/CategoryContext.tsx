import { WorkNode } from './types';
import React, { useState } from 'react';

export type CategoryProviderState = {
    currentCategory: WorkNode,
    setCurrentCategory: React.Dispatch<any>,
}

export const CurrentCategoryContext = React.createContext<CategoryProviderState | undefined>(undefined);

function CurrentCategoryProvider({ children }: { children: React.ReactNode }) {
    const [currentCategory, setCurrentCategory] = useState(undefined);

    return (
        <CurrentCategoryContext.Provider value={{currentCategory, setCurrentCategory}}>
            {children}
        </CurrentCategoryContext.Provider>
    )
}





export default CurrentCategoryProvider;