import { createSlice } from "@reduxjs/toolkit";
import { database } from "../../firebase-config";
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getPosts } from "../actions/postAction";
import { toast } from "react-toastify";

const postReducer = createSlice({
    name: "post",
    initialState: {
        posts: [],
        loading: false,
        error: {},
    },
    reducers: {
        addPost: (state, action) => {
            const postRef = collection(database, "blogs");
            addDoc(postRef, action.payload).then(() => {
                toast("Post added successfully", { type: "success" })
            }).catch((error) => {
                toast(error, { type: "error" })
            })
        },
        editPost: (state, action) => {
            console.log(action.payload, action.payload.id, "Hay")
            const postRef = doc(database, "blogs", action.payload.id);
            updateDoc(postRef, action.payload).then(() => {
                toast("Post update successfully", { type: "success" })
            }).catch((error) => {
                toast(error, { type: "error" })
            })
        },
        deletePost: (state, action) => {
            if (window.confirm("Are you sure delete this tag?")) {
                const postRef = doc(database, "blogs", action.payload);
                deleteDoc(postRef).then(() => {
                    toast("Post delete successfully", { type: "success" })
                }).catch((error) => {
                    toast(error, { type: "error" })
                })
            }
        }
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.loading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [getPosts.error]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
})

export const { addPost, editPost, deletePost } = postReducer.actions;
export default postReducer.reducer;