import React, { FC, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsFillEnvelopeFill, BsFillKeyFill } from "react-icons/bs";
import { loginInputsType, loginErrType } from "../assets/TsType/TypeScriptTypes"
import LoginFormValidation from './Validation/LoginFormValidation';
import { AuthContextProvider } from '../contextApi/AuthContext';
import SingleInput from '../components/fromInput/SingleInput';
import { toast } from 'react-toastify';

const Login: FC = () => {

  const [inputs, setInputs] = useState<loginInputsType>({
    email: '',
    password: ''
  } as loginInputsType);

  const [error, setError] = useState<loginErrType>({
    errorEmail: "",
    errorPassword: ""
  } as loginErrType)

  // login data
  const {email, password} = inputs;

  // Auth context
  const { signIn }: any = useContext(AuthContextProvider)

  // Function Call for validation
  const { errorMsg } = LoginFormValidation(inputs)

  // Form Submit Handler
  const inputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(values => ({ ...values, [name]: value }));
  }
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError((error) => ({ ...error, ...errorMsg }))
    const errorCheck = Object.values(error).every((value) => value === "")
    if (errorCheck) {
      signIn(email, password)
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
                  toggleEyeShow={true}
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