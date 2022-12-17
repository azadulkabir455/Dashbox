import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillEnvelopeFill} from "react-icons/bs";
import SingleInput from '../components/FromInput/SingleInput';

export default function ForgotPass() {
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
                            <form>
                                <SingleInput
                                    label={"email"}
                                    inputType={"email"}
                                    iconElement={<BsFillEnvelopeFill />}
                                    inputPlaceholder={"Write your email.."} />
                                <div className="d-grid">
                                    <button className='btn btn-md btn-primary'>Reset Password</button>
                                </div>
                            </form>
                            <p className='text-center mt-2'><Link to="/login" className='text-primary text-decoration-none '>Back to login page</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
