import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import AddJob from "../Pages/AddJob";
import MyJobs from "../Pages/MyJobs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage";
import Blogs from "../Pages/Blogs";

import AppliedJob from "../Pages/AppliedJob";
import UpdateJob from "../Pages/UpdateJob";
import JobDetails from "../components/JobDetails";
import AccessTokenDetails from "../Pages/AccessTokenDetails";
import Expressjs from "../Pages/Expressjs";
import NestJS from "../Pages/NestJS";
import ManageUsers from "../Pages/Admin/ManageUser";
import HostRoute from "./HostRoute";
import AdminRoutes from "./AdminRoutes";
import Profile from "../Pages/Profile/Profile";
import Statistics from "../Pages/Admin/Statistics";


const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: "/all-jobs",
            element: <AllJobs/>,
            loader: ()=>fetch(' https://jobquest-server-pi.vercel.app/counts')
        },
        
        {
            path: "/add-job",
            element: <PrivateRoutes>
                <HostRoute><AddJob/></HostRoute>
            </PrivateRoutes> 
        }
        ,
        {
            path: "/my-jobs",
            element: <PrivateRoutes>
                <HostRoute><MyJobs/></HostRoute>
            </PrivateRoutes>
        }
        ,
        {
            path: "/applied-jobs",
            element: <PrivateRoutes><AppliedJob></AppliedJob></PrivateRoutes>
        }
        ,
        {
            path: "/blogs",
            element: <Blogs/>
        }
        ,
        {
            path: "/details/:id",
            element: <PrivateRoutes><JobDetails/></PrivateRoutes>,
            loader: ({params})=>fetch(` https://jobquest-server-pi.vercel.app/jobs/${params.id}`)
        }
        ,
        {
            path: "/update/:id",
            element: <PrivateRoutes><UpdateJob/></PrivateRoutes>,
            loader: ({params})=>fetch(` https://jobquest-server-pi.vercel.app/job/${params.id}`)
        }
        ,
        {
            path: "/login",
            element: <Login/>
        }
        ,
        {
            path: "/register",
            element: <Register/>
        }
        ,
        {
            path: "/token",
            element: <AccessTokenDetails/>
        }
        ,
        {
            path: "/express",
            element: <Expressjs/>
        }
        ,
        {
            path: "/nest-js",
            element: <NestJS/>
        },
        {
            path: "/profile",
            element: <Profile/>
        },
         //admin only
         {
            path: '/manage-users',
            element: <PrivateRoutes>
                <AdminRoutes><ManageUsers/></AdminRoutes>
            </PrivateRoutes>
         },
         {
            path: '/stats',
            element: <PrivateRoutes>
                <AdminRoutes><Statistics/></AdminRoutes>
            </PrivateRoutes>
         }

        
    ] 
    }, 
   ]); 
   export default router;