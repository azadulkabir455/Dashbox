import React, { useState, useContext, SyntheticEvent, useEffect } from 'react'
import { BsX } from "react-icons/bs";
import { GlobalContextProvider } from '../../contextApi/GlobalContext';
import { AuthContextProvider } from '../../contextApi/AuthContext';
import { database } from '../../firebase-config';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { v4 } from 'uuid';
import { toast } from "react-toastify"


interface comments {
    postId: number,
    comments: any,
    actionDatabase: string
}
export default function CommentComponent({ postId, comments, actionDatabase }: any) {
    const { currentUser }: any = useContext(AuthContextProvider);
    const { singleUser, getDate, postDataUpdate }: any = useContext(GlobalContextProvider);
    const [comment, setComment] = useState<string>("")
    const [userComments, setUserComments] = useState<any>(comments);
    
    const commentRef = doc(database, actionDatabase, postId);

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        postDataUpdate();
        updateDoc(commentRef, {
            comments: arrayUnion({
                userId: currentUser.uid,
                userName: singleUser.name,
                userRole: singleUser.role,
                userImg: singleUser.imgUrl,
                comment: comment,
                commentId: v4(),
                createDate: new Date()
            })
        }).then(() => {
            setComment("");
            toast("Successfylly commented", { type: "success" })
        }).catch((error) => {
            console.log(error.message)
        })


    }
    const deleteComment = (comment:any) => {
        updateDoc(commentRef, {
            comments: arrayRemove(comment)
        }).then(() => {
            toast("Comment deleted", {type: "success"})
        })

    }
    return (
        <>
            <div className="commentSection mt-5">
                <h6 className='fw-bold text-transform-capitalize'>Write Comments:</h6>
                <hr />
                <form action="/" onSubmit={submitHandler}>
                    <div className="row g-2">
                        <div className="col-10">
                            <label htmlFor="comment" className="visually-hidden">Comment:</label>
                            <input type="text" className="form-control" id="comment" placeholder="Write your comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                        </div>
                        <div className="col-2 d-grid">
                            <button type="submit" className="btn btn-primary mb-3">Comment</button>
                        </div>
                    </div>
                </form>
                <div className="commentsGrid mt-3">
                    {
                        userComments.map((comment: any) =>
                            <div className="singleCommentContainer p-2 shadow rounded mt-4">
                                <div className="userArea d-flex justify-content-between">
                                    <div className="author d-flex align-items-center">
                                        <div className="authorImg">
                                            <img src={comment.userImg} alt="" className='d-inline-block pe-1' />
                                        </div>
                                        <div className="authorContent ms-2">
                                            <p className="m-0 text-capitalize">{comment.userName}<small className='text-primary fw-semibold ps-1'>({comment.userRole})</small> </p>
                                            <small className='text-muted'>{getDate(new Date(comment.createDate.seconds * 1000))}</small>
                                        </div>
                                    </div>
                                    <div className="deleteComment">
                                        {
                                            currentUser.uid === comment.userId ?
                                            <BsX className="text-muted" role="button" onClick={() => {deleteComment(comment)}}/>:
                                            ""
                                        }
                                    </div>
                                </div>
                                <div className="commentArea">
                                    <p className='text-muted m-0 pt-2'>{comment.comment}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div >
        </>
    )
}
