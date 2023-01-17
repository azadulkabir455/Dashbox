import React, { useState, useEffect } from 'react'
import { BsPlusCircle, BsXCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getPostCategory } from '../../store/actions/postCategoryAction';
import { addPostCategory, deletePostCategory } from '../../store/reducers/postCategoryReducer';

import { toast } from 'react-toastify';


export default function CreateCategories() {
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryDesc, setCategoryDesc] = useState<string>("");
  const [error, setError] = useState<any>({
    nameErr: "",
    descErr: "",
  })
  const [render, setRender] = useState(false);

  const dispatch = useDispatch();
  const { postCategories, loading } = useSelector((state: any) => state.postcategory)

  const categoryNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value.toLowerCase());
  }
  const categoryDescHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCategoryDesc(e.target.value)
  }
  const categoryData = { categoryName, categoryDesc }

  const deleteCategory = (id: any) => {
    dispatch(deletePostCategory(id));
    setRender((value) => !value)
  }

  const submitHandle = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (categoryName === "") {
      setError((value: any) => ({ ...value, nameErr: "Must be filled" }))
    } else if (/^\d+$/.test(categoryName)) {
      setError((value: any) => ({ ...value, nameErr: "Must number" }))
    } else {
      setError((value: any) => ({ ...value, nameErr: "" }))
    }

    if (categoryDesc.length >= 60) {
      setError((value: any) => ({ ...value, descErr: "Below 60" }))
    } else {
      setError((value: any) => ({ ...value, descErr: "" }))
    }

    const checkError = Object.values(error).every((value) => value === "");
    if (checkError) {
      dispatch(addPostCategory(categoryData))
      setRender((value) => !value)

    } else {
      toast("Please provide correct inputs", { type: "error" })
    }
    // setCategoryName("");
    // setCategoryDesc("");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // console.log((document.getElementById("form") as HTMLInputElement)) 
  }
  useEffect(() => {
    dispatch(getPostCategory())
  }, [render]);

  let count = 1;
  return (
    <>
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <strong className='mb-2 d-block text-capitalize'> Post categories form</strong>
              <form onSubmit={submitHandle} id="form">
                <div className="mb-4">
                  <div className="input-group">
                    <span className='input-group-text text-muted'><BsPlusCircle /></span>
                    <input type="text" className="form-control" id="categories" placeholder='Categoiry name' name="categoryname" onChange={categoryNameHandler} />
                  </div>
                  {error.nameErr && <small className="text-danger position-absolute">{error.nameErr}</small>}
                </div>
                <div className="mb-3">
                  <div className="form-group">
                    <textarea className="form-control" id="categoryDesc" rows={3} placeholder='Categoiry description (Max 60 charecter)' name="categorydesc" onChange={categoryDescHandler}>
                    </textarea>
                  </div>
                  {error.descErr && <small className="text-danger position-absolute">{error.descErr}</small>}
                </div>
                <input type="submit" value="Add Categories" className="btn btn-primary mt-2" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <strong className='mb-2 d-block text-capitalize'> Post categories list</strong>
          <div className="table-responsive">
            <table className="table table-striped table-bordered" style={{ minWidth: "500px" }}>
              <thead>
                <tr className='table-primary'>
                  <th style={{ width: "50px" }}>No :</th>
                  <th style={{ width: "150px" }}>Categories</th>
                  <th>Description</th>
                  <th style={{ width: "50px" }}></th>
                </tr>
              </thead>
              <tbody>
                {
                  postCategories.map((postCategory: any) =>
                    <tr key={postCategory.id}>
                      <td>{count++}</td>
                      <td className='text-capitalize'>{postCategory.categoryName}</td>
                      <td>{postCategory.categoryDesc ? postCategory.categoryDesc : '-'}</td>
                      <td className='text-center text-info' onClick={() => deleteCategory(postCategory.id)} >
                        <BsXCircle role="button" style={{ fontSize: "16px", fontWeight: "700" }}/>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
