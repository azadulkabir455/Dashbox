import React, { createContext, useState } from 'react'
import { ContextApiChildrenType } from '../assets/TsType/TypeScriptTypes';

const GlobalContextProvider = createContext({});

const GlobalContextConsumer = ({ children }: ContextApiChildrenType) => {
    const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(true)

    const sidebarCollapseToggle = () => {
        setSidebarCollapse((value) => !value);
    }
    return (
        <GlobalContextProvider.Provider value={{ sidebarCollapse, sidebarCollapseToggle }}>
            {children}
        </GlobalContextProvider.Provider>
    )

}

export {
    GlobalContextProvider,
    GlobalContextConsumer
}
