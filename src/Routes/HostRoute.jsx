import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";


const HostRoute = ({children}) => {
    const {user, loading} = useAuth() || {}
    const [role] = useRole()
    if(loading){
        return <div className="flex justify-center items-center min-h-screen"><HashLoader color="#6A38C2" /></div>
    } 
    if(user && role === 'host') return children;
    
        
return <Navigate  to="/login"></Navigate>
};

export default HostRoute;