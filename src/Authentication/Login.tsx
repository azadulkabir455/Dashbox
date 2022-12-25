import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillEnvelopeFill, BsFillKeyFill } from "react-icons/bs";
import SingleInput from '../components/FromInput/SingleInput';

const Login: FC = () => {
  type inputsType  = {
    email: string,
    password: string
  }
  type errorType = {
    errorEmail: string,
    errorPassword: string
  }
  const [inputs, setInputs] = useState<inputsType>({
    email:'',
    password:''} as inputsType);
  const [error, setError] = useState<errorType>({
    errorEmail: "",
    errorPassword: ""
  } as errorType)

  const inputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(values => ({ ...values, [name]: value }));
  }
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    let errorMsg = {} as errorType;
    if (!inputs.email) {
      errorMsg.errorEmail = "Must be provided email"
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      errorMsg.errorEmail = "Email is not valided"
    } else {
      errorMsg.errorEmail = ""
    }

    if (!inputs.password) {
      errorMsg.errorPassword = "Must be provided password"
    } else if (inputs.password?.length < 6 && inputs.password?.length > 0) {
      errorMsg.errorPassword = "Password must be 6 charecter or more"
    } else {
      errorMsg.errorPassword = ""
    }
    setError((error) => ({ ...error, ...errorMsg }))
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
                  label="email"
                  inputType="email"
                  iconElement={<BsFillEnvelopeFill />}
                  inputPlaceholder="Write your email.."
                  inputValue={inputs.email}
                  handleChange={(e) => inputsHandler(e)}
                />
                {error.errorEmail && <small className='text-danger position-absolute'>{error.errorEmail}</small>}

                <SingleInput
                  label="password"
                  inputType="password"
                  iconElement={<BsFillKeyFill />}
                  inputPlaceholder="Write your email.."
                  inputValue={inputs.password}
                  toggleEyeShow = {true}
                  handleChange={(e) => inputsHandler(e)}
                  
                />
                {error.errorPassword && <small className='text-danger position-absolute'>{error.errorPassword}</small>}

                <div className="form-check mb-3 mt-4">
                  <input className="form-check-input" type="checkbox" value="" id="rememberme" />
                  <label className=" form-check-label" htmlFor="rememberme">
                    Remember me
                  </label>
                </div>
                <div className="d-grid">
                  <button className='btn btn-md btn-primary'>Log in</button>
                </div>
              </form>
              <p className='text-center mt-2'><Link to="/forgotpass" className='text-primary text-decoration-none '> Forgot password</Link></p>
              <hr className='text-muted' />
              <div className="buttonGroup d-grid">
                <button className='btn btn-lg btn-success mb-3'>
                  <Link to='/registration' className='text-white text-decoration-none'>Create new account</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;