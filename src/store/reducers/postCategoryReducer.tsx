import { createSlice } from "@reduxjs/toolkit";
import { getPostCategory } from "../actions/postCategoryAction";
import { toast } from 'react-toastify';
import { database } from "../../firebase-config";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";


const postCategoryReducer = createSlice({
    name: "post category",
    initialState: {
        postCategories: [],
        error: {},
        loading: false,
    },
    reducers: {
        addPostCategory: (state, action) => {
            const postCategoryRef = collection(database, "blogCategories");
            addDoc(postCategoryRef, action.payload).then(() => {
                toast("Category added successfully!", { type: "success" })
            }).catch((error) => {
                toast(error, { type: "error" });
            })
        },
        deletePostCategory: (state, action) => {
            if (window.confirm("Are you sure delete this tag?")) {
                const postCategoryRef = doc(database, "blogCategories", action.payload);
                deleteDoc(postCategoryRef).then(() => {
                    toast("Delete category successfully!", { type: "error" })
                }).catch((error) => {
                    toast(error, { type: "error" })
                })
            }
        }
    },
    extraReducers: {
        [getPostCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [getPostCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.postCategories = action.payload;
        },
        [getPostCategory.error]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { addPostCategory, deletePostCategory } = postCategoryReducer.actions
export default postCategoryReducer.reducer;