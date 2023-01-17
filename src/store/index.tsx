import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducers from "./reducers/userReducers";
import postCategoryReducer from "./reducers/postCategoryReducer";
import postReducer from "./reducers/postReducer";

const store = configureStore({
    reducer:{
        user: userReducers,
        post: postReducer,
        postcategory: postCategoryReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck:false})
})
export default store;