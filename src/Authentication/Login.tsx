import React,{FC} from 'react'
import { Link } from 'react-router-dom'
import { BsFillEnvelopeFill, BsFillKeyFill } from "react-icons/bs";
import SingleInput from '../components/FromInput/SingleInput';

 const Login:FC = () => {
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
                <SingleInput
                  label={"password"}
                  inputType={"password"}
                  iconElement={<BsFillKeyFill />}
                  inputPlaceholder={"Write your email.."} />
                <div className="d-grid">
                  <button className='btn btn-md btn-primary'>Log in</button>
                </div>
              </form>
              <p className='text-center mt-2'><Link to="/forgotpass" className='text-primary text-decoration-none '> Forgot password</Link></p>
              <hr className='text-muted' />
              <button className='d-block mx-auto btn btn-md btn-success'>
                <Link to='/registration' className='text-white text-decoration-none'>Create new account</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;