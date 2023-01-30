
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContextProvider } from '../contextApi/GlobalContext';
import { BsCloudUpload, BsXCircle, BsKanbanFill, BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

import { v4 } from 'uuid';
import { storage } from '../firebase-config';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import "../assets/css/profile.scss"

import { useDispatch } from 'react-redux';
import { editUser } from '../store/reducers/userReducers';



export default function UserProfile() {
    // Single User data fetch
    const { singleUser }: any = useContext(GlobalContextProvider);
    
    const [profileInputs, setProfileInputs] = useState<any>({ name: "", username: "", phone: "" });
    const [bio, setBio] = useState<string>("")

    const [img, setImg] = useState<null | any>(null);
    const [imgUrl, setImgUrl] = useState<string>("");
    const [imgUpload, setImgUpload] = useState<null | number>(null)


    // Change User data function
    const dispatch = useDispatch();
    const combineData = { ...profileInputs, bio, imgUrl }
    
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(editUser(combineData))
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setProfileInputs((values: any) => ({ ...values, [name]: value }))
    }

    const bioHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBio(e.target.value)
    }
    const imgHandler = (e: any) => {
        setImg(e.target.files[0])
    }

    const deleteImg = () => {
        dispatch(editUser({imgUrl:"",id: singleUser.id}))
        const imgRef = ref(storage, imgUrl)
        deleteObject(imgRef).then(() => {
            setImgUrl("")
            console.log("Image delete successfully")
        })
    }

    useEffect(() => {
        if (img === null) return;
        const imgRef = ref(storage, `userImages/${img.name + v4()}`);
        const uploadTask = uploadBytesResumable(imgRef, img);

        uploadTask.on("state_changed", (snapshot) => {
            const progress: number = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setImgUpload(progress);

            switch (snapshot.state) {
                case "paused":
                    console.log("Img uploading paused");
                    break;
                case "running":
                    console.log("Img uploading running");
                    break;
                default:
                    console.log("Img uploading done");
            }
        }, (error) => {
            console.log(error.message)
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setImgUrl(url);
            })
        }
        )
    }, [img]);

    useEffect(() => {
        singleUser && setProfileInputs({ name: singleUser.name, username: singleUser.username, phone: singleUser.phone, id: singleUser.id });
        singleUser && setImgUrl(singleUser.imgUrl);
        singleUser && setBio(singleUser.bio)
    }, [singleUser])
    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-5">
                    <form onSubmit={submitHandler} className="userForm">
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="form-group inputImg position-relative">
                                    <label htmlFor="img" className="form-label text-center border border-primary d-flex flex-column align-items-center justify-content-center">
                                        <BsCloudUpload className='text-primary' role="button" />
                                        <h6 className=' text-capitalize mt-3 text-muted'>Upload your picture</h6>
                                    </label>
                                    <input className="form-control d-none" type="file" id="img" onChange={imgHandler} disabled={imgUrl?true:false}/>
                                    {
                                        (imgUpload === null || imgUpload >= 100) ?
                                            "" :
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: `${imgUpload}%` }} >{Math.ceil(imgUpload)} %</div>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="bio" className="form-label text-uppercase fw-bold text-muted">Bio :</label>
                                    <textarea className="form-control" id="blog" rows={3} placeholder="Write your blog here" onChange={bioHandler} value={bio} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label text-uppercase fw-bold text-muted">Name :</label>
                                    <input className="form-control" type="text" id="name" name="name" placeholder="Write your name" onChange={inputHandler} value={profileInputs.name} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="username" className="form-label text-uppercase fw-bold text-muted">User Name :</label>
                                    <input className="form-control" type="text" id="userName" name="username" placeholder="Write your user name" onChange={inputHandler} value={profileInputs.username} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label text-uppercase fw-bold text-muted">Phone :</label>
                                    <input className="form-control" type="number" id="phone" name="phone" placeholder="Write your phone number" onChange={inputHandler} value={profileInputs.phone} />
                                </div>
                            </div>

                            <div className="col-12 d-grid">
                                <input type="submit" value="Update profile" className='mt-2 mb-3 btn btn-lg btn-success text-capitalize fw-semibold' style={{ fontSize: '16px' }} />
                            </div>

                        </div>
                    </form>
                </div>
                <div className="col-12 col-lg-7">
                    <div className="profilePreview border">
                        <h6 className="d-flex fw-bold text-capitalize bg-primary text-white px-3 py-2 m-0">
                            <BsKanbanFill className="me-1" />
                            Profile preview
                        </h6>
                        <div className="previewContainer bg-white m-3 ">
                            <div className="banner position-relative">
                                <div className="imgContainer">
                                    <div className="imgCoverColor"></div>
                                    {
                                        imgUrl?
                                            <>
                                                <div className="inputImg">
                                                    <img src={imgUrl} alt="post image" />
                                                    <BsXCircle className="position-absolute" onClick={deleteImg} role="button" />
                                                </div>
                                            </>
                                            :
                                            <img src="https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg" alt="post image" />
                                    }
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12 col-lg-6">
                                        <p className='m-0 text-primary text-capitalize'>
                                            {profileInputs.name}
                                            <span className='text-danger'>(admin)</span>
                                        </p>
                                        <span className='text-muted text-lowercase'>{profileInputs.username}</span>
                                        {
                                            bio ?
                                                <p className='mt-2 text-capitalize'>
                                                    {bio}
                                                </p> :
                                                <p className='mt-2 text-capitalize'>
                                                    Write a fantastic bio of yours.
                                                </p>
                                        }
                                    </div>
                                    <div className="col-12 col-lg-6 text-muted">
                                        <p className='m-0 mb-2'>
                                            <BsFillTelephoneFill /> {profileInputs.phone}
                                        </p>
                                        <p className='text-lowercase'>
                                            <BsFillEnvelopeFill /> {singleUser && singleUser.email}
                                        </p>
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
