import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { HashLoader } from "react-spinners";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth() || {}
    if(loading){
        return <div className="flex justify-center items-center min-h-screen"><HashLoader color="#6A38C2" /></div>
    } 
    if(user) return children;
    return  <Navigate state={location?.pathname || "/"} to="/login" replace></Navigate>
   
};

export default PrivateRoutes;