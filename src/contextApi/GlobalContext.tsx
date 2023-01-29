import React, { createContext, useState, useEffect } from 'react'
import { getPostCategory } from '../store/actions/postCategoryAction';
import { getUsers } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';
import { ContextApiChildrenType } from '../assets/TsType/TypeScriptTypes';

const GlobalContextProvider = createContext({});

const GlobalContextConsumer = ({ children }: ContextApiChildrenType) => {
    const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(true)

    // For Post Data
    const [blogName, setBlogName] = useState<string>("Blog Title")
    const [blogCategory, setBlogCategory] = useState<string>("default")
    const [blog, setBlog] = useState<string>("Write your blog here")
    const [imgUrl, setImgUrl] = useState<string>("");

    const sidebarCollapseToggle = () => {
        setSidebarCollapse((value) => !value);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostCategory());
        dispatch(getUsers());
    }, [])
    return (
        <GlobalContextProvider.Provider value={{ sidebarCollapse, sidebarCollapseToggle, blogName, setBlogName, blogCategory, setBlogCategory, blog, setBlog, imgUrl, setImgUrl }}>
            {children}
        </GlobalContextProvider.Provider>
    )

}

export {
    GlobalContextProvider,
    GlobalContextConsumer
}
