import React, { createContext, useState, useEffect, useContext } from 'react'
import { getPostCategory } from '../store/actions/postCategoryAction';
import { getPosts } from '../store/actions/postAction';
import { getUsers } from '../store/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { ContextApiChildrenType } from '../assets/TsType/TypeScriptTypes';
import { AuthContextProvider } from './AuthContext';


const GlobalContextProvider = createContext({});

const GlobalContextConsumer = ({ children }: ContextApiChildrenType) => {
    const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(true)
    const [postUpdate, setPostUpdate] = useState<boolean>(true)

    // Single User data fetch
    const { currentUser }: any = useContext(AuthContextProvider)
    const { users } = useSelector((state: any) => state.user)
    const singleUser:any = currentUser &&  users.find((user: any) => user.id === currentUser.uid);



    // For Post Data
    const [blogName, setBlogName] = useState<string>("Blog Title")
    const [blogCategory, setBlogCategory] = useState<string>("default")
    const [blog, setBlog] = useState<string>("Write your blog here")
    const [imgUrl, setImgUrl] = useState<string>("");

    // Function for getting date
    const getDate = (date: any) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const houre = date.getHours();
        const min = date.getMinutes();
        const combineDate = year + "-" + month + "-" + day + " " + houre + ":" + min;
        return combineDate + (houre <= 12 ? "am" : "pm");
      }
    
    // For value change function
    const sidebarCollapseToggle = () => {
        setSidebarCollapse((value) => !value);
    }

    const postDataUpdate = () => {
        setPostUpdate((value) =>  !value)
    }
    // All Data fetch function
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostCategory());
        dispatch(getPosts());
        dispatch(getUsers());
    },[]);
    useEffect(() => {
        dispatch(getPosts());
    },[postUpdate])
    console.log("Posts",postUpdate,sidebarCollapse)
    return (
        <GlobalContextProvider.Provider value={{ sidebarCollapse, sidebarCollapseToggle, blogName, setBlogName, blogCategory, setBlogCategory, blog, setBlog, imgUrl, setImgUrl,singleUser,getDate,postDataUpdate}}>
            {children}
        </GlobalContextProvider.Provider>
    )

}

export {
    GlobalContextProvider,
    GlobalContextConsumer
}
