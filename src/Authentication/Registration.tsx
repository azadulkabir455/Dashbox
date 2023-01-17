import React, { useState, useContext } from 'react'
import { BsPersonFill, BsFillTelephoneFill, BsFillEnvelopeFill, BsKeyFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import SingleInput from './fromInput/SingleInput'
import RegistrationFormValidation from './Validation/RegistrationFormValidation';
import { AuthContextProvider } from '../contextApi/AuthContext';
import { registrationInputsType, registrationErrInputsType } from "../assets/TsType/TypeScriptTypes"
import "../assets/css/authCSS/registration.scss"
import { toast } from 'react-toastify';

export default function Registration() {
    const [inputs, setInputs] = useState<registrationInputsType>({
        name: "",
        phone: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    } as registrationInputsType);

    const [error, setError] = useState<registrationErrInputsType>({
        errName: "",
        errPhone: "",
        errEmail: "",
        errUsername: "",
        errPassword: "",
        errConfirmPassword: ""
    } as registrationErrInputsType)

    // Sign Up Data
    const { email, password, confirmPassword, ...restInputData } = inputs;
    const userData = { ...restInputData, email, role: "user", img: "" }

    // Auth Context
    const { signUp }: any = useContext(AuthContextProvider);

    // Fuction call for validatin
    const { errMsg } = RegistrationFormValidation(inputs);

    // Collect data from form
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((values) => ({ ...values, [name]: value }))
    }

    // From Submit With Data validation
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setError((errors) => ({ ...error, ...errMsg }));
        const errorCheck = Object.values(error).every((value) => value === "")
        if (errorCheck) {
            signUp(email, password, { ...userData })
        } else {
            toast("Please correct your inputs!", { type: "error" })
        }
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
                                        handleChange={(e) => { inputHandler(e) }}
                                    />
                                    {error.errName && <small className="text-danger position-absolute">{error.errName}</small>}
                                    <SingleInput
                                        label='phone'
                                        inputType='tel'
                                        iconElement={<BsFillTelephoneFill />}
                                        inputPlaceholder="Write your contact no"
                                        inputValue={inputs.phone}
                                        handleChange={(e) => { inputHandler(e) }}
                                    />
                                    {error.errPhone && <small className="text-danger position-absolute">{error.errPhone}</small>}
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
                                        handleChange={(e) => { inputHandler(e) }}
                                    />
                                    {error.errEmail && <small className="text-danger position-absolute">{error.errEmail}</small>}
                                    <SingleInput
                                        label='password'
                                        inputType="password"
                                        iconElement={<BsKeyFill />}
                                        inputPlaceholder="Password "
                                        inputValue={inputs.password}
                                        toggleEyeShow={true}
                                        handleChange={(e) => { inputHandler(e) }}
                                    />
                                    {error.errPassword && <small className="text-danger position-absolute">{error.errPassword}</small>}
                                </div>
                                <div className="col-12 col-lg-6">
                                    <SingleInput
                                        label='username'
                                        inputType='text'
                                        iconElement={<BsPersonFill />}
                                        inputPlaceholder="Write your user name"
                                        inputValue={inputs.username}
                                        handleChange={(e) => { inputHandler(e) }}

                                    />
                                    {error.errUsername && <small className="text-danger position-absolute">{error.errUsername}</small>}
                                    <SingleInput
                                        label='confirmPassword'
                                        inputType="password"
                                        iconElement={<BsKeyFill />}
                                        inputPlaceholder="Confirm password"
                                        inputValue={inputs.confirmPassword}
                                        handleChange={(e) => { inputHandler(e) }}
                                        toggleEyeShow={true}
                                    />
                                    {error.errConfirmPassword && <small className="text-danger position-absolute">{error.errConfirmPassword}</small>}
                                </div>
                                <div className=" d-grid col-12 mt-4">
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
