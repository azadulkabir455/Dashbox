import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContextProvider } from '../contextApi/AuthContext';
import { BsFillEnvelopeFill } from "react-icons/bs";
import SingleInput from "./fromInput/SingleInput"
import { toast } from 'react-toastify';

export default function ForgotPass() {
    const [email, setEmail] = useState<string>("");
    const [emailErr, setEmailErr] = useState<string>("")
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    // Auth Context
    const { resetPassword }: any = useContext(AuthContextProvider)
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        let err: string = ""
        if (!email) {
            err = 'Email must be provide';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            err = "Email is not validate";
        } else {
            err = ''
        }
        setEmailErr(err)

        // Check error and reset password

        if (emailErr === "") {
            resetPassword(email)
        } else {
            toast("Please correct your inputs!", { type: "error" })
        }
    }
    return (
        <>
            <div className="container">
                <div className="row" style={{ marginTop: "15vh" }}>
                    <div className="col-12 col-lg-6 offset-1">
                        <div className="authContent d-flex flex-column justify-content-center" style={{ height: "100%" }}>
                            <h1 className='text-uppercase text-primary'>DashBox</h1>
                            <h5 className='text-muted text-capitalize me-5'>It's a dashbord site. Manage your task other's utilities with this beatiful site.</h5>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="formContainer p-4 shadow">
                            <form onSubmit={submitHandler} noValidate={true}>
                                <SingleInput
                                    label={"email"}
                                    inputType={"email"}
                                    iconElement={<BsFillEnvelopeFill />}
                                    inputPlaceholder={"Write your email.."}
                                    inputValue={email}
                                    handleChange={emailHandler}
                                />
                                {emailErr && <small className="text-danger">{emailErr}</small>}
                                <div className="d-grid mt-3">
                                    <button className='btn btn-md btn-primary'>Reset Password</button>
                                </div>
                            </form>
                            <p className='text-center mt-2'><Link to="/login" className='text-primary text-decoration-none '>Back to login page.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
