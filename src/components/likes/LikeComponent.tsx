import React, { useContext } from 'react'
import { AuthContextProvider } from '../../contextApi/AuthContext';
import { GlobalContextProvider } from '../../contextApi/GlobalContext';
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { doc, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore';
import { database } from '../../firebase-config';
import { toast } from 'react-toastify';

interface like {
    postId: string,
    userLikes: any,
    dataCategory: string
}
export default function LikeComponent({ postId, userLikes, dataCategory }: like) {
    const { currentUser }: any = useContext(AuthContextProvider);
    const {postDataUpdate}:any = useContext(GlobalContextProvider)

    let likeRef = doc(database, dataCategory, postId);

    const likeHandler = () => {
        if (userLikes?.includes(currentUser.uid)) {
            updateDoc(likeRef, { likes: arrayRemove(currentUser.uid) }).then(() => {
                toast("You dislike this post", { type: "success" })
            }).catch((error) => {
                toast(error.message, { type: "error" })
            })
        } else {
            updateDoc(likeRef, { likes: arrayUnion(currentUser.uid) }).then(() => {
                toast("You like this post", { type: "success" })
            }).catch((error) => {
                toast(error.message, { type: "error" })
            })
        }
    }

    return (
        <>
            <button className='me-3 text-muted m-0 border-0 bg-transparent' onClick={() => {likeHandler();postDataUpdate()}}>
                {
                    userLikes?.includes(currentUser.uid) ?
                        <BsFillHeartFill /> :
                        <BsHeart />
                } {userLikes.length}
            </button>
        </>
    )
}
