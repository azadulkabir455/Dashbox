import { createSlice } from "@reduxjs/toolkit";
import { database } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
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
        }
    },
    extraReducers: {}
})

export const { addPost } = postReducer.actions;
export default postReducer.reducer;