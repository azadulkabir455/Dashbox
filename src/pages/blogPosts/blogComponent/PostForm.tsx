import React, { ChangeEvent, useEffect, useState, useContext } from "react"
import { BsCloudUpload, BsXCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { GlobalContextProvider } from "../../../contextApi/GlobalContext";
import { addPost, editPost } from "../../../store/reducers/postReducer";
import { serverTimestamp } from "firebase/firestore";

import { v4 } from "uuid";
import { storage } from "../../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

import "../../../assets/css/blogPost.scss"

interface postForm {
    isCreatePost: boolean;
    postData?: any;
}

export default function PostForm({ isCreatePost, postData }: postForm) {

    const {
        blog,
        imgUrl,
        blogName,
        blogCategory,
        setBlog,
        setImgUrl,
        setBlogName,
        setBlogCategory,
        singleUser }: any = useContext(GlobalContextProvider)
    const [id, setId] = useState<number | null>(null)

    // Img upload function
    const [img, setImg] = useState<null | any>(null);
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);

    // Fetch Post Category
    const dispatch = useDispatch();
    const { postCategories } = useSelector((state: any) => state.postcategory);

    // Gather Blog input data

    const blogNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBlogName(e.target.value);
    }
    const blogCategoryHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setBlogCategory(e.target.value)
    }
    const blogHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBlog(e.target.value);
    }
    const deleteImg = () => {
        const imgRef = ref(storage, imgUrl)
        deleteObject(imgRef).then(() => {
            setImgUrl("")
            console.log("Image delete successfully")
        })
    }
    useEffect(() => {
        postData && setBlog(postData.blog);
        postData && setBlogName(postData.blogName);
        postData && setBlogCategory(postData.blogCategory);
        postData && setImgUrl(postData.imgUrl)
        postData && setId(postData.id)
    }, [postData])


    const imgHandler = (e: any) => {
        setImg(e.target.files[0])
    }
    useEffect(() => {
        if (img === null) return;
        const imgRef = ref(storage, `postImages/${img.name + v4()}`)
        const uploadTask = uploadBytesResumable(imgRef, img);

        uploadTask.on("state_changed", (snapshot) => {
            const progress: number = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);

            switch (snapshot.state) {
                case "paused":
                    console.log("Img upload paused");
                    break;
                case "running":
                    console.log("Img upload running");
                    break;
                default:
                    console.log("Img upload done");
            }
        }, (error) => {
            console.log(error.message)
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setImgUrl(url);
            })
        }
        )
    }, [img])

    const combineData = singleUser && { blogName, blogCategory, imgUrl, blog, comments: [], likes: [], user: singleUser, date: serverTimestamp() }
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (isCreatePost === true) {
            dispatch(addPost(combineData));
        } else {
            // console.log({ ...combineData, id: id })
            dispatch(editPost({ ...combineData, id: id }))
        }

    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="row g-3">
                    <div className="col-12">
                        {
                            isCreatePost ?
                                <div className="form-group inputImg position-relative text-center">
                                    <label htmlFor="img" className="form-label d-block border pt-5 pb-4">
                                        <BsCloudUpload className='text-primary' role="button" />
                                        <h6 className=' text-capitalize mt-3 text-muted'>Upload your banner image</h6>
                                    </label>
                                    <input className="form-control d-none" type="file" id="img" onChange={imgHandler} disabled={imgUrl ? true : false} />
                                    {
                                        (uploadProgress === null || uploadProgress >= 100) ?
                                            "" :
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: `${uploadProgress}%` }} >{Math.ceil(uploadProgress)} %</div>
                                            </div>
                                    }
                                </div> :
                                <div className="form-group inputImg position-relative text-center">
                                    {imgUrl ?
                                        <div className="inputImg position-relative">
                                            <img src={imgUrl} alt="post image" style={{ width: "100%", height: "130px", objectFit: "cover" }} />
                                            <BsXCircle className="position-absolute top-0 start-0" onClick={deleteImg} role="button" />
                                        </div>
                                        : <label htmlFor="img" className="form-label d-block border pt-5 pb-4">
                                            <BsCloudUpload className='text-primary' role="button" />
                                            <h6 className=' text-capitalize mt-3 text-muted'>Upload your banner image</h6>
                                        </label>}
                                    <input className="form-control d-none" type="file" id="img" onChange={imgHandler} disabled={imgUrl ? true : false} />
                                    {
                                        (uploadProgress === null || uploadProgress >= 100) ?
                                            "" :
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: `${uploadProgress}%` }} >{Math.ceil(uploadProgress)} %</div>
                                            </div>
                                    }
                                </div>
                        }
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label text-uppercase fw-bold text-muted">Blog title</label>
                            <input className="form-control" type="text" id="blogName" placeholder="Write blog title" onChange={blogNameHandler} value={blogName} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="category" className="form-label text-uppercase fw-bold text-muted">Blog category</label>
                            <select className="form-select" name="category" value={blogCategory} id="category" onChange={blogCategoryHandler}>
                                <option className="text-capitalize text-muted">Select Blog Category</option>
                                {
                                    postCategories.map((category: any) =>
                                        <option value={category.categoryName} className="text-capitalize text-muted" key={category.id}>
                                            {category.categoryName}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="blog" className="form-label text-uppercase fw-bold text-muted">Blog</label>
                            <textarea className="form-control" id="blog" rows={5} value={blog} placeholder="Write your blog here" onChange={blogHandler} />
                        </div>
                    </div>

                    <div className="col-12 d-grid">
                        <input type="submit" value={isCreatePost?"Add blog":"Save changes"} className='mt-2 mb-3 btn btn-lg btn-success text-capitalize fw-semibold' style={{ fontSize: '16px' }} />
                    </div>

                </div>
            </form>
        </>
    )
}
