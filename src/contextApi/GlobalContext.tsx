import React, { createContext, useState,useEffect } from 'react'
import { getPostCategory } from '../store/actions/postCategoryAction';
import { useDispatch } from 'react-redux';
import { ContextApiChildrenType } from '../assets/TsType/TypeScriptTypes';

const GlobalContextProvider = createContext({});

const GlobalContextConsumer = ({ children }: ContextApiChildrenType) => {
    const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(true)

    const sidebarCollapseToggle = () => {
        setSidebarCollapse((value) => !value);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostCategory());
    },[])
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
