import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducers from "./reducers/userReducers";

const store = configureStore({
    reducer:{
        user: userReducers
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck:false})
})
export default store;