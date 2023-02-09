import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { GlobalContextProvider } from '../../contextApi/GlobalContext';

export default function SingleBlog() {
    const { id } = useParams();
    const { posts, loading } = useSelector((state: any) => state.post)
    const singlePost = posts && posts.filter((post: any) => post.id === id)[0];

    const {getDate}:any = useContext(GlobalContextProvider);

    return (
        <>
            <img src={singlePost.imgUrl} alt="" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
            <div className="authorContent d-flex justify-content-between">
                <div className="author d-flex align-items-center">
                    <div className="authorImg">
                    <img src={singlePost.user.imgUrl} alt="" className='d-inline-block' style={{width: "30px",height:"30px",borderRadius:"100px"}}/>
                    </div>
                    <div className="authorContent ms-2">
                        <p className="m-0 text-capitalize">{singlePost.user?.name}<small className='text-primary fw-semibold'>({singlePost.user?.role})</small> </p>
                        <small className='text-muted'>{singlePost.date && getDate(new Date(singlePost.date.seconds * 1000))}</small>
                    </div>
                </div>
                <div className="category">
                    <span className="blogCategory badge rounded-pill bg-info text-capitalize">
                        {singlePost.blogCategory}
                    </span>
                </div>
            </div>
            <h1>{singlePost.blogName}</h1>
            <p>{singlePost.blog}</p>
        </>
    )
}
