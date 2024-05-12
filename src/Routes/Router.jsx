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


const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <App/>,
    // errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: "/all-jobs",
            element: <AllJobs/>
        },
        
        {
            path: "/add-job",
            element: <PrivateRoutes><AddJob/></PrivateRoutes> 
        }
        ,
        {
            path: "/my-jobs",
            element: <PrivateRoutes><MyJobs/></PrivateRoutes>
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
            loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        }
        ,
        {
            path: "/update/:id",
            element: <PrivateRoutes><UpdateJob/></PrivateRoutes>,
            loader: ({params})=>fetch(`http://localhost:5000/job/${params.id}`)
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
        
    ] 
    }, 
   ]); 
   export default router;