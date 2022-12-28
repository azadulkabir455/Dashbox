import React,{Suspense,lazy} from 'react'
import { Routes,Route } from 'react-router-dom'
import GlobalLoader from '../components/loaders/GlobalLoader'

// Authentication pages

const Login = lazy(() => import("../Authentication/Login"))
const Registration = lazy(() => import("../Authentication/Registration"))
const ForgotPass = lazy(() => import("../Authentication/ForgotPass"))

// Pages
const Home = lazy(() => import("../pages/Home"))
export default function Routers() {
  return (
    <Suspense fallback={<GlobalLoader />}>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/registration" element={<Registration />} />
            <Route path="/forgotPass" element={<ForgotPass />}/>

            {/* Pages */}
            <Route path="/"  element={<Home />} />
        </Routes>
    </Suspense>
  )
}
