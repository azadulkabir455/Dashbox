import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase-config";

const getPosts:any = createAsyncThunk("posts", async () => {
    const postRef = collection(database,"blogs");
    const postRes = await getDocs(postRef);
    const getPosts = postRes.docs.map((doc :any) => ({...doc.data(), id: doc.id}));
    return getPosts;
})

export {
    getPosts
}