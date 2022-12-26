import React, {createContext } from 'react'
import { ContextApiChildrenType } from '../assets/TsType/TypeScriptTypes';

const GlobalContextProvider = createContext({});

const GlobalContextConsumer = ({ children }: ContextApiChildrenType) => {

    return (
        <GlobalContextProvider.Provider value={{}}>
            {children}
        </GlobalContextProvider.Provider>
    )

}

export {
    GlobalContextProvider,
    GlobalContextConsumer
}
