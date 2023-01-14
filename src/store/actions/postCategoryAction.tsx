import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore"


const getPostCategory:any = createAsyncThunk("postcategory", async () => {
    const postCategoryRef = collection(database, "blogCategories");
    const getPostCategoryRes = await getDocs(postCategoryRef);
    const getPostCategory = getPostCategoryRes.docs.map((doc) => ({...doc.data(),id: doc.id}))
    return getPostCategory;
})

export {
    getPostCategory
}