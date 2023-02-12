import React, { useState, useContext, SyntheticEvent } from 'react'
import { BsX } from "react-icons/bs";


interface comments {
    postId: number,
    comments: any,
    commentCategory: string
}
export default function CommentComponent({ postId, comments, commentCategory }: any) {

    const submitHandler = (e:SyntheticEvent) => {
        e.preventDefault();
        
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
                            <input type="text" className="form-control" id="comment" placeholder="Write your comment" />
                        </div>
                        <div className="col-2 d-grid">
                            <button type="submit" className="btn btn-primary mb-3">Comment</button>
                        </div>
                    </div>
                </form>
                <div className="commentsGrid mt-3">
                    <div className="singleCommentContainer p-2 shadow rounded">
                        <div className="userArea d-flex justify-content-between">
                            <div className="author d-flex align-items-center">
                                <div className="authorImg">
                                    <img src='' alt="" className='d-inline-block pe-1' style={{ width: "40px", height: "38px", borderRadius: "100px" }} />
                                </div>
                                <div className="authorContent ms-2">
                                    <p className="m-0 text-capitalize">azad<small className='text-primary fw-semibold ps-1'>role</small> </p>
                                    <small className='text-muted'>date</small>
                                </div>
                            </div>
                            <div className="deleteComment">
                                <BsX className="text-muted" />
                            </div>
                        </div>
                        <div className="commentArea">
                            <p className='text-muted m-0 pt-2'>This post is so usefull</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
