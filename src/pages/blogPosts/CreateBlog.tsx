import React, { ChangeEvent, useEffect, useState } from "react"
import { BsCloudUpload, BsXCircle, BsKanbanFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../store/reducers/postReducer";

import { v4 } from "uuid";
import { storage } from "../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

import "../../assets/css/blogPost.scss"

export default function CreateBlog() {
  const [blogName, setBlogName] = useState<string>("Blog Title")
  const [blogCategory, setBlogCategory] = useState<string>("default")
  const [blog, setBlog] = useState<string>("Write your blog here")

  // Img upload function
  const [img, setImg] = useState<null | any>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
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

  // Img data collection

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

  const deleteImg = () => {
    const imgRef = ref(storage, imgUrl)
    deleteObject(imgRef).then(() => {
      setImgUrl("")
      console.log("Image delete successfully")
    })
  }

  const combineData = { blogName, blogCategory, imgUrl, blog, comments: [], likes: [] }
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(addPost(combineData))
  }
  return (
    <>
      <div className="row my-4">
        <div className="col-12 col-lg-6 blogForm">
          <form onSubmit={submitHandler}>
            <div className="row g-3">
              <div className="col-12">
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
                </div>
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
                  <select className="form-select" name="category" id="category" onChange={blogCategoryHandler}>
                    <option value={postCategories} className="text-capitalize text-muted">Select Blog Category</option>
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
                <input type="submit" value="Add blog" className='mt-2 mb-3 btn btn-lg btn-success text-capitalize fw-semibold' style={{ fontSize: '16px' }} />
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-6">
          <div className="blogPreview border">
            <h6 className="d-flex fw-bold text-capitalize bg-primary text-white px-3 py-2 m-0">
              <BsKanbanFill className="me-1" />
              Post preview
            </h6>
            <div className="previewContainer bg-white m-3 ">
              <div className="banner position-relative">
                <div className="imgContainer">
                  {
                    imgUrl ?
                      <>
                        <div className="inputImg">
                          <img src={imgUrl} alt="post image" />
                          <BsXCircle className="position-absolute" onClick={deleteImg} role="button" />
                        </div>
                      </>
                      :
                      <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="post image" />
                  }
                </div>
              </div>
              <div className="blogInfo mt-3 px-3 d-flex justify-content-between align-items-center ">
                <div className="userInfo d-flex align-items-center">
                  <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="" className="rounded-circle border border-primary border-2" />
                  <div className="userContent ms-2">
                    <h6 className="m-0 fw-semibold">Azad Ul Kabir</h6>
                    <small className="text-muted">admin</small>
                  </div>
                </div>
                <span className="blogCategory badge rounded-pill bg-info text-capitalize">
                  {blogCategory}
                </span>
              </div>
              <div className="blog py-4 px-3">
                <h2 className="text-capitalize fw-bold text-primary">{blogName}</h2>
                <p className="m-0">{blog}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
