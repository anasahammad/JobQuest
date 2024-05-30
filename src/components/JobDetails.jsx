import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { HashLoader } from "react-spinners";
import ModalPopup from "./ModalPopup";

const JobDetails = () => {
    const {id} = useParams()
    const [isOpen, setIsOpen] = useState(false);
    const { isPending ,data: jobs = [], refetch } = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => {
          const res = await axios(" http://localhost:5000/jobs");
          return res.data;
        },
      });
      if(isPending) return <div className="flex justify-center items-center min-h-screen"><HashLoader color="#6A38C2" /></div>
      const singleJob = jobs.find(job=> job._id === id);
     
      //destructer the singleJob
      const { jobTitle,postingDate, deadline, min_salary, max_salary,applicants, description, category, jobOwner, _id, pictureURL } = singleJob || {}


      const openModal = () => {
        setIsOpen(true);
      };
    
      const closeModal = () => {
        setIsOpen(false);
      };
    return (
        <section className=" dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold  capitalize lg:text-3xl dark:text-white">{jobTitle}</h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center lg:px-8">
            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={pictureURL} alt=""/>

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 space-y-4">
                <h3 className="text-2xl font-bold">Description: </h3>
            <p className="mt-3 text-sm  dark:text-gray-300 md:text-sm">
                    {description}
                </p>
                    <h3 className="font-medium text-2xl">About This Role</h3>
                    <div className="flex  justify-between items-center">
                        <p className="">
                            Apply Before 
                        </p>

                        <p className="font-bold text-xs lg:text-base text-right">
                          {new Date(deadline).toDateString()}  
                        </p>
                    </div>
                    <div  className="flex gap-3 justify-between  items-center">
                        <p className="">
                            Job Posted On 
                        </p>

                        <p className="font-bold text-xs lg:text-base">
                          {new Date(postingDate).toDateString()}  
                        </p>
                    </div>
                    <div  className="flex justify-between  items-center">
                        <p className="">
                            Job Type
                        </p>

                        <p className="font-bold text-xs lg:text-base">
                         {category} 
                        </p>
                    </div>
                    <div  className="flex justify-between  items-center">
                        <p className="">
                            Already Applied
                        </p>

                        <p className="font-bold text-xs lg:text-base">
                         {applicants} 
                        </p>
                    </div>
                    <div  className="flex justify-between items-center">
                        <p className="">
                            Salary 
                        </p>

                        <p className=' font-bold  text-xs lg:text-base'>
           ${min_salary} - ${max_salary}

        </p>
                    </div>

                    <div>
                    <button onClick={openModal} type="button" className="px-8 py-3 font-semibold border rounded bg-[#6A38C2] text-white w-full">Apply Now</button>
                    </div>
                    <ModalPopup singleJob={singleJob}  openModal={openModal} isOpen={isOpen} closeModal={closeModal}> </ModalPopup>
                </div>
        </div>
    </div>
</section>
    );
};

export default JobDetails;