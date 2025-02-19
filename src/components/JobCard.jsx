import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import {motion} from 'framer-motion'

const JobCard = ({job}) => {
    const { jobTitle,postingDate, deadline, min_salary, max_salary,applicants, description, category, jobOwner, _id } = job;
    const {user} = useAuth()
    const navigate = useNavigate()
    // const from = ;
    const handleViewDetails = ()=>{
        if(user){
            navigate(location.state)
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: `You have to login first to view details`,
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              
        }
    }
    return (
        <motion.div whileHover={{ scale: 1.1 }} className=" max-w-lg px-3 hover:scale-105 transition duration-100 lg:px-8 py-4  rounded-lg shadow-md ">
    <div   className="flex items-center  justify-between">
        <span   className="text-sm font-light   dark:text-gray-400">Date: {new Date(postingDate).toLocaleDateString()}</span>
        <a   className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">Applied: {applicants}</a>
    </div>

    <div   className="mt-2">
        <a href="#"   className="text-xl font-bold    dark:text-white hover:  dark:hover:text-gray-200 hover:underline" tabIndex="0" role="link">{jobTitle}</a>
        <p   className="mt-2   dark:text-gray-300">{description?.substring(0, 40)} </p>
    </div>

        <div className="">
            <div className="flex flex-col lg:flex-row  justify-between lg:items-center">
            <p className='mt-2 text-sm font-bold  '>
          Salary: ${min_salary} - ${max_salary}

        </p>
        <p   className="text-sm font-light   dark:text-gray-400">Deadline: {new Date(deadline).toLocaleDateString()}</p>
            </div>
        

        </div>
    <div   className="flex flex-col-reverse lg:flex-row lg:items-center justify-between mt-4">
        <Link to={ `/details/${_id}`}   onClick={handleViewDetails}  className="text-blue-600  dark:text-blue-400 hover:underline" tabIndex="0" role="link"> View Details

                    </Link>

        <div   className="flex items-center">
            
            <a   className="font-bold    cursor-pointer dark:text-gray-200" tabIndex="0" role="link">{jobOwner?.name}</a>
        </div>
    </div>
</motion.div>
    );
};

export default JobCard; 