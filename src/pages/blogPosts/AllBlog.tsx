import React from 'react'
import { BsSearch, BsFillPersonFill, BsColumnsGap, BsListUl, BsGridFill, BsGrid3X3GapFill, BsThreeDotsVertical } from "react-icons/bs";

export default function AllBlog() {



  return (
    <>
      <div className="filterArea d-flex justify-content-between mt-2">
        <div className="filter d-flex align-items-center">
          <div className="input-group ">
            <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
            <input type="text" className="form-control" placeholder="Search Here" />
          </div>
          <div className="input-group ms-2">
            <span className="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
            <select className="form-select" name="category" id="category">
              <option className="text-capitalize text-muted">Filter Writer</option>
            </select>
          </div>
          <div className="input-group ms-2">
            <span className="input-group-text" id="basic-addon1"><BsColumnsGap /></span>
            <select className="form-select" name="category" id="category">
              <option className="text-capitalize text-muted">Filter Category</option>
            </select>
          </div>
        </div>
        <div className="display d-flex">
          <BsGridFill className='me-2' />
          <BsGrid3X3GapFill className='me-2' />
          <BsListUl className='me-2' />
        </div>
      </div>
      <div className="contentArea mt-5">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                <img src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{width:"100%"}}/>
              </div>
              <div className="card-body">
                <div className="authorContent d-flex justify-content-between">
                  <div className="author">
                    <p className="m-0">Azad ul kabir</p>
                    <small>01-01-2023</small>
                  </div>
                  <div className="category">
                    <span className="blogCategory badge rounded-pill bg-info text-capitalize">
                      Education
                    </span>
                  </div>
                </div>
                <div className="postContent">
                  <h4>The title</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cum.</p>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <div className="activity d-flex">
                  <p>likes: 20</p>
                  <p>comment: 30</p>
                </div>
                <div className="actions">
                  <div className="dropdown">
                    <span className="dropdown-toggle" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <BsThreeDotsVertical />
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>Edit</li>
                      <li>Delete</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
