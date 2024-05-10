import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";
import axios from 'axios'
import { HashLoader } from "react-spinners";


const JobDetails = () => {
    const {id} = useParams()
    const { isPending ,data: jobs = [] } = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => {
          const res = await axios("http://localhost:5000/jobs");
          return res.data;
        },
      });
      if(isPending) return <div className="flex justify-center items-center min-h-screen"><HashLoader color="#6A38C2" /></div>
      const singleJob = jobs.find(job=> job._id === id);
     
      //destructer the singleJob
      const { jobTitle,postingDate, deadline, min_salary, max_salary,applicants, description, category, jobOwner, _id, pictureURL } = singleJob || {}
    return (
        <section className="p-6 ">
        <div className="container grid gap-6 mx-auto  lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                <h1 className="text-5xl font-extrabold ">{jobTitle}</h1>
                <p className="my-8">
                    <span className="font-medium max-w-md text-2xl">Description: <br /> </span>{description}
                </p>
                
                <div className="space-y-4">
                    <h3 className="font-medium text-2xl">About This Role</h3>
                    <div className="flex  justify-between items-center">
                        <p className="">
                            Apply Before 
                        </p>

                        <p className="font-bold">
                          {new Date(deadline).toDateString()}  
                        </p>
                    </div>
                    <div  className="flex gap-3 justify-between  items-center">
                        <p className="">
                            Job Posted On 
                        </p>

                        <p className="font-bold text-right">
                          {new Date(postingDate).toDateString()}  
                        </p>
                    </div>
                    <div  className="flex justify-between  items-center">
                        <p className="">
                            Job Type
                        </p>

                        <p className="font-bold">
                         {category} 
                        </p>
                    </div>
                    <div  className="flex justify-between  items-center">
                        <p className="">
                            Already Applied
                        </p>

                        <p className="font-bold">
                         {applicants} 
                        </p>
                    </div>
                    <div  className="flex justify-between items-center">
                        <p className="">
                            Salary 
                        </p>

                        <p className=' font-bold  '>
           ${min_salary} - ${max_salary}

        </p>
                    </div>

                    <div>
                    <button type="button" className="px-8 py-3 font-semibold border rounded bg-[#6A38C2] text-white w-full">Apply Now</button>
                    </div>
                </div>
            </div>
            <img src={pictureURL} />
        </div>
    </section>
    );
};

export default JobDetails;