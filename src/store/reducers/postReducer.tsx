import { createSlice } from "@reduxjs/toolkit";
import { database } from "../../firebase-config";
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const postReducer = createSlice({
    name: "post",
    initialState: {
        posts: []
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
            const postRef = doc(database, "blogs", action.payload.id);
            updateDoc(postRef, action.payload).then(() => {
                toast("Post update successfully", {type:"success"})
            }).catch((error) => {
                toast(error,{type:"error"})
            })
        },
        deletePost: (state, action) => {
            const postRef = doc(database,"blogs", action.payload.id);
            deleteDoc(postRef).then(() => {
                toast("Post delete successfully", {type:"success"})
            }).catch((error) => {
                toast(error, {type:"error"})
            })
        }
    },
    extraReducers: {}
})

export const { addPost, editPost, deletePost } = postReducer.actions;
export default postReducer.reducer;