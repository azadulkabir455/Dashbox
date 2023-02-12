import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GlobalContextProvider } from '../../contextApi/GlobalContext';
import "../../assets/css/blogPost.scss";
import LikeComponent from '../../components/likes/LikeComponent';

export default function SingleBlog() {
    const { id } = useParams();
    const { posts, loading } = useSelector((state: any) => state.post)
    const singlePost = posts && posts.filter((post: any) => post.id === id)[0];

    console.log(posts, "hi", singlePost)

    const { getDate }: any = useContext(GlobalContextProvider);

    return (
        <>
            {
                loading ? "" :
                    posts &&
                    <div className="singleBlog">
                        <img src={singlePost.imgUrl} alt="" className="bannerImg pb-4" />
                        <div className="authorContent d-flex justify-content-between">
                            <div className="author d-flex align-items-center">
                                <div className="authorImg">
                                    <img src={singlePost.user.imgUrl} alt="" className='d-inline-block pe-1' />
                                </div>
                                <div className="authorContent ms-2">
                                    <p className="m-0 text-capitalize">{singlePost.user?.name}<small className='text-primary fw-semibold ps-1'>({singlePost.user?.role})</small> </p>
                                    <small className='text-muted'>{singlePost.date && getDate(new Date(singlePost.date.seconds * 1000))}</small>
                                </div>
                            </div>
                            <div className="category">
                                <LikeComponent postId={singlePost.id} userLikes={singlePost.likes} dataCategory="blogs" />
                                <span className="blogCategory badge rounded-pill bg-info text-capitalize">
                                    {singlePost.blogCategory}
                                </span>
                            </div>
                        </div>
                        <h1 className="mt-4 text-primary text-capitalize fw-semibold">{singlePost.blogName}</h1>
                        <p className="text-muted ">{singlePost.blog}</p>
                    </div>
            }
        </>
    )
}
