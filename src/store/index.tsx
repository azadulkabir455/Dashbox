import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducers from "./reducers/userReducers";
import postCategoryReducer from "./reducers/postCategoryReducer";

const store = configureStore({
    reducer:{
        user: userReducers,
        postcategory: postCategoryReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck:false})
})
export default store;