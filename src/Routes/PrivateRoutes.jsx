import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth() || {}
   
    if(user) return children;
    return  <Navigate state={location?.pathname || "/"} to="/login" replace></Navigate>
   
};

export default PrivateRoutes;