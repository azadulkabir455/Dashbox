import React,{Suspense,lazy} from 'react'
import { Routes,Route } from 'react-router-dom'
import GlobalLoader from '../components/loaders/GlobalLoader'

// Authentication pages

const Login = lazy(() => import("../Authentication/Login"))
const Registration = lazy(() => import("../Authentication/Registration"))
const ForgotPass = lazy(() => import("../Authentication/ForgotPass"))

// Dashboard Pages
const Dashbord = lazy(() => import("../pages/Dashbord/Dashbord"))

// Post Pages

const AllBlog = lazy(() => import("../pages/blogPosts/AllBlog"));
const CreateBlog = lazy(() => import("../pages/blogPosts/CreateBlog"));
const CreateCategories = lazy(() => import("../pages/blogPosts/CreateCategories"));

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
            <Route path="/"  element={<Home />}>
              <Route index element={<Dashbord />} />
              <Route path="allblog">
                <Route index element={<AllBlog/>}/>
                <Route path="createblog" element={<CreateBlog/>}/>
                <Route path="createcetagories" element={<CreateCategories/>}/>
              </Route>
            </Route>
        </Routes>
    </Suspense>
  )
}
