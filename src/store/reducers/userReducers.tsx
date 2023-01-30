import { createSlice } from "@reduxjs/toolkit"
import { getUsers } from "../actions/userAction";
import { database } from "../../firebase-config";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify"

const userReducer = createSlice({
    name: "user",
    initialState: {
        users: [],
        error: {},
        loading: false,

    },
    reducers: {
        editUser: (state, action) => {
            const usertRef = doc(database, "users", action.payload.id);
            updateDoc(usertRef, action.payload).then(() => {
                toast("User update successfully", { type: "success" })
            }).catch((error) => {
                toast(error, { type: "error" })
            })
        },
        deleteUser: (state, action) => {
            const userRed = doc(database, "users", action.payload.id);
            deleteDoc(userRed).then(() => {
                toast("User delete successfully", { type: "success" })
            }).catch((error) => {
                toast(error, { type: "error" })
            })
        },
    },
    extraReducers: {
        [getUsers.pending]: (state, acttion) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getUsers.error]: (state, action) => {
            state.error = action.payload;
            state.loading = false
        }
    }
})

export const { editUser, deleteUser } = userReducer.actions;
export default userReducer.reducer;