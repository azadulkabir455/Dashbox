import React,{Suspense,lazy,useContext} from 'react'
import { AuthContextProvider } from '../contextApi/AuthContext'
import { Routes,Route } from 'react-router-dom'
import GlobalLoader from '../components/loaders/GlobalLoader'

import ProtectedRoute,{ProtectedRouteProps} from './ProtectedRoute'

// Authentication pages

const Login = lazy(() => import("../Authentication/Login"))
const Registration = lazy(() => import("../Authentication/Registration"))
const ForgotPass = lazy(() => import("../Authentication/ForgotPass"))

// Dashboard Pages
const Dashbord = lazy(() => import("../pages/Dashbord/Dashbord"))
const UserProfile = lazy(() => import("../pages/UserProfile"))

// Post Pages

const AllBlog = lazy(() => import("../pages/blogPosts/AllBlog"));
const CreateBlog = lazy(() => import("../pages/blogPosts/CreateBlog"));
const CreateCategories = lazy(() => import("../pages/blogPosts/CreateCategories"));

// Pages
const Home = lazy(() => import("../pages/Home"))
export default function Routers() {
  const {currentUser}:any = useContext(AuthContextProvider)
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps,"outlet"> = {
    isAuthenticated: currentUser,
    authenticationPath:"/login"
  }
  return (
    <Suspense fallback={<GlobalLoader />}>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/registration" element={<Registration />} />
            <Route path="/forgotPass" element={<ForgotPass />}/>

            {/* Pages */}
            <Route path="/"  element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Home />}/>}>
              <Route index element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Dashbord />}/>} />
              <Route path="profile" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<UserProfile/>}/>} />
              <Route path="allblog">
                <Route index element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AllBlog/>}/>}/>
                <Route path="createblog" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<CreateBlog/>}/>}/>
                <Route path="createcetagories" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<CreateCategories/>}/>}/>
              </Route>
            </Route>
        </Routes>
    </Suspense>
  )
}
