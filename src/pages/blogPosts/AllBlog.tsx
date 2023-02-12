import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsSearch, BsFillPersonFill, BsColumnsGap, BsListUl, BsGridFill, BsGrid3X3GapFill, BsThreeDotsVertical, BsFillHeartFill, BsChatLeftTextFill, BsVectorPen, BsFillTrash2Fill, BsFillEyeFill } from "react-icons/bs";
import EditModals from './blogComponent/EditModals';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/reducers/postReducer';
import { GlobalContextProvider } from '../../contextApi/GlobalContext';
import "../../assets/css/blogPost.scss"
import LikeComponent from '../../components/likes/LikeComponent';


export default function AllBlog() {
  const [isList, setIsList] = useState<boolean>(false);
  const [isGrid, setGrid] = useState<boolean>(true);
  const [col, setCol] = useState<boolean>(false);
  const [modalData, setModalData] = useState<object>({})

  const { posts } = useSelector((state: any) => state.post)
  const dispatch = useDispatch();

  const { getDate }: any = useContext(GlobalContextProvider)

  const listView = () => {
    setIsList(true);
    setGrid(false);
  }
  const gridView = () => {
    setIsList(false);
    setGrid(true);
  }
  const increseCol = () => {
    setCol((value) => !value)
  }

  const blogSummery = (post: string) => {
    return post.slice(0, 120) + "..."
  }

  const deletePostFunc = (id: any) => {
    dispatch(deletePost(id))
  }

  const setDataForModal = (data: any) => {
    setModalData(data)
  }
  return (
    <>
      <div className="filterArea d-flex justify-content-between align-items-center mt-2">
        <div className="filter d-flex align-items-center">
          <div className="input-group ">
            <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
            <input type="text" className="form-control" placeholder="Search Here" />
          </div>
          <div className="input-group ms-md-2">
            <span className="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
            <select className="form-select" name="category" id="category">
              <option className="text-capitalize text-muted">Filter Writer</option>
            </select>
          </div>
          <div className="input-group ms-md-2">
            <span className="input-group-text" id="basic-addon1"><BsColumnsGap /></span>
            <select className="form-select" name="category" id="category">
              <option className="text-capitalize text-muted">Filter Category</option>
            </select>
          </div>
        </div>
        <div className="displayArea d-flex">
          <BsGrid3X3GapFill className='me-2 d-none d-md-block text-muted' role="button" onClick={increseCol} />
          <BsGridFill className='me-2 text-muted' role="button" onClick={gridView} />
          <BsListUl className='me-2 text-muted' role="button" onClick={listView} />
        </div>
      </div>
      <div className="contentArea mt-5">
        <div className="row g-4">
          {
            isGrid &&
            posts.map((post: any) =>
              <div className={`col-12 col-md-6 col-lg-${col ? "3" : "4"}`} key={post.id}>
                <div className="card">
                  <div className="card-header">
                    <Link to={post.id}><img src={post.imgUrl} alt="" /></Link>
                  </div>
                  <div className="card-body">
                    <div className="authorContent d-flex justify-content-between">
                      <div className="author d-flex align-items-center">
                        <div className="authorImg">
                          {
                            post.user?.imgUrl ?
                              <img src={post.user.imgUrl} alt="" className='d-inline-block' /> :
                              <img src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='d-inline-block' />
                          }

                        </div>
                        <div className="authorContent ms-2">
                          <p className="m-0 text-capitalize">{post.user?.name}<small className='text-primary fw-semibold ps-1 mt-1'>({post.user?.role})</small> </p>
                          <small className='text-muted'>{post.date && getDate(new Date(post.date.seconds * 1000))}</small>
                        </div>
                      </div>
                      <div className="category">
                        <span className="blogCategory badge rounded-pill bg-info text-capitalize">
                          {post.blogCategory}
                        </span>
                      </div>
                    </div>
                    <div className="postContent mt-4">
                      <h4 className='fw-bold text-primary text-capitalize '>
                        <Link to={post.id} className="text-decoration-none">{post.blogName}</Link>
                      </h4>
                      <p className='m-0 text-muted'>{blogSummery(post.blog)}</p>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <div className="activity d-flex">
                      <LikeComponent postId={post.id} userLikes={post.likes} dataCategory="blogs" />
                      <p className='text-muted m-0'>
                        <Link to={post.id} className="text-decoration-none text-muted"><BsChatLeftTextFill /> {post.comments.length}</Link>
                      </p>
                    </div>
                    <div className="actions">
                      <div className="dropdown">
                        <span className="dropdown-toggle text-muted" role="button" data-bs-toggle="dropdown">
                          <BsThreeDotsVertical />
                        </span>
                        <ul className="dropdown-menu p-0">
                          <li className='px-3 py-1 text-muted' role="button" data-bs-toggle="modal" data-bs-target="#postEdit" onClick={() => setDataForModal(post)}>
                            <BsVectorPen /> Edit
                          </li>
                          <li className='px-3 py-1 text-muted' role="button" onClick={() => deletePostFunc(post.id)}>
                            <BsFillTrash2Fill /> Delete
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          {
            isList &&
            posts.map((post: any) =>
              <div className="col-12">
                <div className="row p-3 mb-2">
                  <div className="col-3 p-0">
                    <Link to={post.id}><img src={post.imgUrl} alt="" style={{ width: "100%", height: "160px" }} /></Link>
                  </div>
                  <div className="col-7 d-flex flex-column justify-content-center">
                    <h4 className='fw-bold text-primary text-capitalize m-0'>
                    <Link to={post.id} className="text-decoration-none">{post.blogName}</Link>
                    </h4>
                    <div className="authorContent d-flex justify-content-between mb-2">
                      <p className="m-0 text-capitalize">{post.user.name} <small className='text-primary fw-semibold'>({post.user.role})</small> </p>
                      <span className="blogCategory badge rounded-pill bg-info text-capitalize">
                        {post.blogCategory}
                      </span>
                    </div>
                    <p className="text-muted mb-3">{blogSummery(post.blog)}</p>
                    <div className="activity d-flex">
                      <LikeComponent postId={post.id} userLikes={post.likes} dataCategory="blogs" />
                      <p className='text-muted m-0'>
                        <Link to={post.id} className="text-decoration-none text-muted"><BsChatLeftTextFill /> {post.comments.length}</Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-2 d-flex justify-content-end align-items-center">
                    <div className="action">
                      <Link to={post.id}><BsFillEyeFill className='text-info' role="button" /></Link>
                      <BsVectorPen className='text-warning ms-2' role="button" data-bs-toggle="modal" data-bs-target="#postEdit" onClick={() => setDataForModal(post)} />
                      <BsFillTrash2Fill className='text-danger ms-2' role="button" onClick={() => deletePostFunc(post.id)} />
                    </div>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>

      <EditModals id={"postEdit"} modalData={modalData} />
    </>
  )
}
