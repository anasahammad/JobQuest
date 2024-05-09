import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import AddJob from "../Pages/AddJob";
import MyJobs from "../Pages/MyJobs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <App/>,
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
            element: <AddJob/>
        }
        ,
        {
            path: "/my-jobs",
            element: <MyJobs/>
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
    ] 
    }, 
   ]); 
   export default router;