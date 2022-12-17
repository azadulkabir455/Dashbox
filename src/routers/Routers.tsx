import React,{Suspense,lazy} from 'react'
import { Routes,Route } from 'react-router-dom'
import GlobalLoader from '../components/loaders/GlobalLoader'

const Login = lazy(() => import("../Authentication/Login"))
const Registration = lazy(() => import("../Authentication/Registration"))
const ForgotPass = lazy(() => import("../Authentication/ForgotPass"))
export default function Routers() {
  return (
    <Suspense fallback={<GlobalLoader />}>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/registration" element={<Registration />} />
            <Route path="/forgotPass" element={<ForgotPass />}/>
        </Routes>
    </Suspense>
  )
}
