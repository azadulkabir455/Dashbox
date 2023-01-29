import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

const getUsers:any = createAsyncThunk("users", async() => {
    const userRef = collection(database, "users");
    const userRes = await getDocs(userRef);
    const getUsers = userRes.docs.map((doc) => ({...doc.data(), id: doc.id}))
    return getUsers;
})

export {
    getUsers
}