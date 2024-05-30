import { useQuery } from "@tanstack/react-query";


import axios from "axios";
import useAuth from "./useAuth";

const useRole = () => {
    const {user, loading} = useAuth()
    const {data: role = '', isLoading} = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async ()=>{
            const {data} = await axios.get(`https://jobquest-server-pi.vercel.app/users/${user?.email}`)
            return data.role;

        }
    })
    
    
    
    return [role, isLoading]
};

export default useRole;