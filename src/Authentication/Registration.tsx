import React from 'react'
import { BsPersonFill, BsCloudUpload,BsFillTelephoneFill,BsFillEnvelopeFill,BsKeyFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import SingleInput from '../components/FromInput/SingleInput'
import "../assets/css/authCSS/registration.scss"

export default function Registration() {
    return (
        <>
            <div className="container registration">
                {/* <form>
                    <div className="row">
                        <div className="col-12 col-lg-6 mx-auto shadow p-4" style={{marginTop: "15vh"}}>
                            <div className="row">
                                <div className="col-12 col-lg-7">
                                    <SingleInput
                                        label='name'
                                        inputType='text'
                                        iconElement={<BsPersonFill />}
                                        inputPlaceholder="Write your name"
                                    />
                                    <SingleInput
                                        label='phone'
                                        inputType='tel'
                                        iconElement={<BsFillTelephoneFill />}
                                        inputPlaceholder="Write your contact no"
                                    />
                                </div>
                                <div className="col-12 col-lg-5">
                                    <div className="mb-3">
                                        <label htmlFor="img" className='from-label uploadImg d-block'>
                                            <BsCloudUpload />
                                            <p className='d-block text-center text-primary text-capitalize m-0'>Select profile image</p>
                                        </label>
                                        <input type="file" id="img" style={{ display: "none" }} />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <SingleInput
                                        label='email'
                                        inputType='email'
                                        iconElement={<BsFillEnvelopeFill />}
                                        inputPlaceholder="Write your email address"
                                    />
                                    <SingleInput
                                        label='password'
                                        inputType='password'
                                        iconElement={<BsKeyFill />}
                                        inputPlaceholder="Password "
                                    />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <SingleInput
                                        label='username'
                                        inputType='text'
                                        iconElement={<BsPersonFill />}
                                        inputPlaceholder="Write your user name"
                                    />
                                    <SingleInput
                                        label='password'
                                        inputType='password'
                                        iconElement={<BsKeyFill />}
                                        inputPlaceholder="Confirm password "
                                    />
                                </div>
                                <div className=" d-grid col-12">
                                    <button className='btn btn-md btn-primary' type="submit">Registration</button>
                                    <Link to="/login" className='text-primary text-decoration-none d-block text-center mt-3'>Back to login page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form> */}
            </div>
        </>
    )
}
