import React, { useState } from 'react'
import { BsPersonFill, BsFillTelephoneFill, BsFillEnvelopeFill, BsKeyFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import SingleInput from '../components/FromInput/SingleInput'
import "../assets/css/authCSS/registration.scss"

export default function Registration() {
    // Types for variable
    type inputsType = {
        name: string,
        phone: string,
        email: string,
        username: string,
        password: string,
        confirmPassword: string
    }
    type errInputsType = {
        errName: string,
        errPhone: string,
        errEmail: string,
        errUsername: string,
        errPassword: string,
        errConfirmPassword: string
    }

    const [inputs, setInputs] = useState<inputsType>({
        name: "",
        phone: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    } as inputsType);
    const [error, setError] = useState<errInputsType>({
        errName: "",
        errPhone: "",
        errEmail: "",
        errUsername: "",
        errPassword: "",
        errConfirmPassword: ""
    } as errInputsType)
    console.log(inputs)
    // Collect data from form
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((values) => ({ ...values, [name]: value }))
    }
    // For validation
    const nameHandler = () => {
        let errMsg: string = ""
        if (inputs.name.length < 4 && inputs.name.length >= 0) {
            errMsg = "Name must be at lest 4 charecter"
        } else {
            errMsg = "";
        }
        setError((errors) => ({ ...errors, errName: errMsg }))
    }
    const phoneHandler = () => {
        let errMsg: string = ""
        if(!/^\d+$/.test(inputs.phone)) {
            errMsg = "Phone contact  must be number";
        }else if(inputs.phone.length < 10) {
            errMsg = "Phone number is must be 11 character"
        }else {
            errMsg = ""
        }
        setError((errors) => ({...errors, errPhone: errMsg}))
    }
    const emailHandler = () => {
        let errMsg : string = "";
        if(!/\S+@\S+\.\S+/.test(inputs.email)) {
            errMsg = "Email is not valid";
        } else {
            errMsg = "";
        }
        setError((errors) => ({...errors, errEmail: errMsg}))
    }
    const unameHandler = () => {
        let errMsg : string = "";
        if (!/[A-Za-z]\d/.test(inputs.username)) {
            errMsg = "Must combine with text and number"
        } else if (inputs.username.length <= 6) {
            errMsg = "Must be contain 6 character or more"
        }else {
            errMsg = ""
        }
        setError((errors) => ({...errors, errUsername: errMsg}))
    }
    const passwordHandler = () => {
        let errMsg : string= "";
        if (inputs.password.length < 6 || inputs.password.length >= 14) {
            errMsg = "Password Must 6 to 14 character"
        }else {
            errMsg = ""
        }
        setError((errors) => ({...errors, errPassword: errMsg}))
    }
    const confirmHandler = () => {
        let errMsg : string = "";
        if(inputs.password.length !== inputs.confirmPassword.length) {
            errMsg = "Password not match"
        }else {
            errMsg = ""
        }
        setError((errors) => ({...errors, errConfirmPassword: errMsg}))
    }

    // From Submit With Data validation
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let errMsg = {} as errInputsType;
        if (!inputs.name) {
            errMsg.errName = "Name must be provided"
        }
        if (!inputs.email) {
            errMsg.errEmail = "Email must be provided"
        }
        if (!inputs.phone) {
            errMsg.errPhone = "Phone must be provided"
        }
        if (!inputs.username) {
            errMsg.errUsername = "User Name must be provided"
        }
        if (!inputs.password) {
            errMsg.errPassword = "Password must be provided"
        }
        if (!inputs.confirmPassword) {
            errMsg.errConfirmPassword = "Confirm password must be provided"
        }

        setError((errors) => ({ ...errors, ...errMsg }))
    }
    return (
        <>
            <div className="container registration">
                <form onSubmit={submitHandler} noValidate={true}>
                    <div className="row">
                        <div className="col-12 col-lg-6 mx-auto shadow p-4" style={{ marginTop: "15vh" }}>
                            <div className="row">
                                <div className="col-12">
                                    <SingleInput
                                        label='name'
                                        inputType='text'
                                        iconElement={<BsPersonFill />}
                                        inputPlaceholder="Write your name"
                                        inputValue={inputs.name}
                                        handleChange={(e) => { inputHandler(e); nameHandler() }}
                                    />
                                    {error.errName && <small className="text-danger">{error.errName}</small>}
                                    <SingleInput
                                        label='phone'
                                        inputType='tel'
                                        iconElement={<BsFillTelephoneFill />}
                                        inputPlaceholder="Write your contact no"
                                        inputValue={inputs.phone}
                                        handleChange={(e) => {inputHandler(e); phoneHandler()}}
                                    />
                                    {error.errPhone && <small className="text-danger">{error.errPhone}</small>}
                                </div>
                                {/* <div className="col-12 col-lg-5">
                                    <div className="mb-3">
                                        <label htmlFor="img" className='from-label uploadImg d-block'>
                                            <BsCloudUpload />
                                            <p className='d-block text-center text-primary text-capitalize m-0'>Select profile image</p>
                                        </label>
                                        <input type="file" id="img" style={{ display: "none" }} />
                                    </div>
                                </div> */}
                                <div className="col-12 col-lg-6">
                                    <SingleInput
                                        label='email'
                                        inputType='email'
                                        iconElement={<BsFillEnvelopeFill />}
                                        inputPlaceholder="Write your email address"
                                        inputValue={inputs.email}
                                        handleChange={(e) => {inputHandler(e);emailHandler()}}
                                    />
                                    {error.errEmail && <small className="text-danger">{error.errEmail}</small>}
                                    <SingleInput
                                        label='password'
                                        inputType='password'
                                        iconElement={<BsKeyFill />}
                                        inputPlaceholder="Password "
                                        inputValue={inputs.password}
                                        handleChange={(e) => {inputHandler(e); passwordHandler()}}
                                    />
                                    {error.errPassword && <small className="text-danger">{error.errPassword}</small>}
                                </div>
                                <div className="col-12 col-lg-6">
                                    <SingleInput
                                        label='username'
                                        inputType='text'
                                        iconElement={<BsPersonFill />}
                                        inputPlaceholder="Write your user name"
                                        inputValue={inputs.username}
                                        handleChange={(e) => {inputHandler(e); unameHandler()}}
                                    />
                                    {error.errUsername && <small className="text-danger">{error.errUsername}</small>}
                                    <SingleInput
                                        label='confirmPassword'
                                        inputType='password'
                                        iconElement={<BsKeyFill />}
                                        inputPlaceholder="Confirm password"
                                        inputValue={inputs.confirmPassword}
                                        handleChange={(e) => {inputHandler(e); confirmHandler()}}
                                    />
                                    {error.errConfirmPassword && <small className="text-danger">{error.errConfirmPassword}</small>}
                                </div>
                                <div className=" d-grid col-12 mt-3">
                                    <button className='btn btn-md btn-primary' type="submit">Registration</button>
                                    <Link to="/login" className='text-primary text-decoration-none d-block text-center mt-3'>Back to login page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
