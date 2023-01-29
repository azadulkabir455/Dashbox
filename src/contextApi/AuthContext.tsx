import React, { createContext, useState, useEffect } from 'react'
import { ContextApiChildrenType, dataType } from '../assets/TsType/TypeScriptTypes';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import { auth, database } from "../firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

import {
    doc,
    setDoc
} from "firebase/firestore"

const AuthContextProvider = createContext({});


const AuthContextConsumer = ({ children }: ContextApiChildrenType) => {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState<any>([]);

    // signUp functionality
    const signUp = async (email: string, password: string, data: dataType) => {
        await createUserWithEmailAndPassword(auth, email, password).then(async (authenticateUser) => {
            const userRef = doc(database, "users", authenticateUser.user.uid);
            await setDoc(userRef, { ...data, id: authenticateUser.user.uid }).then(() => {
                toast("You SignUp Successfully", { type: "success", })
                navigate("/login");
            })
            await sendEmailVerification(authenticateUser.user)
        }).catch((error) => {
            toast(error, { type: "error" })
        })
    }

    // signIn funtionality
    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password).then(() => {
            toast("LogIn Successfully!", { type: 'success' });
            navigate("/")
        }).catch((error) => {
            toast(error, { type: "error" })
        })
    }

    // logOut functionality
    const logOut = async () => {
        await signOut(auth).then(() => {
            toast("Log Out Successfully!");
            navigate("/login")
        }).catch((error) => {
            toast(error, { type: "success" })
        })
    }

    // resetPassword functionality
    const resetPassword = async (email: string) => {
        await sendPasswordResetEmail(auth, email).then(() => {
            toast("Send email succefully!");
            navigate("/login")
        })
    }

    // get currentUser
    useEffect(() => {
        const userSubs = onAuthStateChanged(auth, (currentUser: any) => {
            setCurrentUser(currentUser);
        })
        return () => {
            userSubs();
        }
    })
  

    return (
        <AuthContextProvider.Provider value={{ signUp, signIn, logOut, resetPassword, currentUser }}>
            {children}
        </AuthContextProvider.Provider>
    )
}

export {
    AuthContextProvider,
    AuthContextConsumer
}
