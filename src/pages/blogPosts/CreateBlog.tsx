import React, { useContext } from "react"
import { GlobalContextProvider } from "../../contextApi/GlobalContext";
import { BsXCircle, BsKanbanFill } from "react-icons/bs";

import { storage } from "../../firebase-config";
import { ref, deleteObject } from "firebase/storage";

import "../../assets/css/blogPost.scss"
import PostForm from "./blogComponent/PostForm";

export default function CreateBlog() {
  const { blogName, blogCategory, blog, imgUrl, setImgUrl }: any = useContext(GlobalContextProvider)
  const deleteImg = () => {
    const imgRef = ref(storage, imgUrl)
    deleteObject(imgRef).then(() => {
      setImgUrl("")
      console.log("Image delete successfully")
    })
  }
  return (
    <>
      <div className="row my-4">
        <div className="col-12 col-lg-6 blogForm">
          <PostForm isCreatePost={true} />
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
