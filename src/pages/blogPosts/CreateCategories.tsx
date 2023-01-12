import React, { useState, useEffect } from 'react'
import { BsPlusCircle, BsFillTrashFill } from "react-icons/bs";
import { database } from '../../firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { v4 } from "uuid"
import { toast } from 'react-toastify';

// const categoryRef = collection(database, "blogCategories");
// const getData = async () => {
//   const response = await getDocs(categoryRef)
//   const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//   return data;
// }

export default function CreateCategories() {
  const [getCategories, setGetCategories] = useState<any>([]);
  const [render, setRender] = useState(false);
  const [category, setCategory] = useState<string>("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  }


  useEffect(() => {
    const categoryRef = collection(database, "blogCategories");
    const getData = async () => {
      const data = await getDocs(categoryRef)
      setGetCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getData();
  }, [render])

  console.log(getCategories)
  const submitHandle = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (category !== "") {
      const categoryRef = collection(database, "blogCategories");
      addDoc(categoryRef, { category, id: v4() }).then(() => {
        toast("Category added successfully!", { type: "success" })
        setRender(value => !value)
      }).catch((error) => {
        toast(error, { type: "error" });
      })
    } else {
      toast("Category must be added!", { type: "error" });
    }
  }


  return (
    <>
      <h3 className='text-capitalize fw-semibold text-muted mb-5'>Add categories for your blog post</h3>
      <div className="row g-4">
        <div className="col-12 col-lg-9">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <form onSubmit={submitHandle}>
                <div className="mb-3">
                  <label htmlFor="categories" className="form-label text-muted">Categories</label>
                  <div className="input-group">
                    <span className='input-group-text'><BsPlusCircle /></span>
                    <input type="text" className="form-control" id="categories" placeholder='Add a categoiry' name="category" onChange={inputHandler} />
                  </div>
                </div>
                <input type="submit" value="Add Categories" className="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <h5 className='text-capitalize fw-bold text-muted'>Categories</h5>
          <p className='bg-primary bg-opacity-10 p-1 m-0 mb-1 rounded d-flex justify-content-between' style={{ fontSize: "14px" }}>
            <span>Nature Tour</span>
            <span className='text-danger'><BsFillTrashFill /></span>
          </p>
          <p className='bg-primary bg-opacity-10 p-1 m-0 mb-1 rounded d-flex justify-content-between' style={{ fontSize: "14px" }}>
            <span>Nature Tour</span>
            <span className='text-danger'><BsFillTrashFill /></span>
          </p>
          <p className='bg-primary bg-opacity-10 p-1 m-0 mb-1 rounded d-flex justify-content-between' style={{ fontSize: "14px" }}>
            <span>Nature Tour</span>
            <span className='text-danger'><BsFillTrashFill /></span>
          </p>
        </div>
      </div>
    </>
  )
}
