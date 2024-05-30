import { useQuery } from "@tanstack/react-query";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import { HashLoader } from "react-spinners";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
const AllJobs = () => {
    const {count} = useLoaderData()
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const numberOfPage = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPage).keys().map(page=> page + 1 )]
    const {user} = useAuth()
    const navigate = useNavigate()
   
   
  const { isPending, data: jobs, refetch } = useQuery({
    queryKey: ["jobs", currentPage, itemsPerPage, filter, search],
    queryFn: async () => {
      const res = await axios(` http://localhost:5000/jobs?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&search=${search}`);
      return res.data;
      
    },
   
  });
  
  useEffect(()=>{
    refetch()
  }, [currentPage, itemsPerPage, refetch, filter, search])

  useEffect(()=>{
    
  }, [])

  const handlePrev = ()=>{
    if(currentPage > 1){
        setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = ()=>{
    if(currentPage < pages.length){
        setCurrentPage( currentPage + 1)
    }
  }
  const handleSearch = e =>{
    e.preventDefault()
    setSearch(searchText)
    setCurrentPage(1);
  }


  if (isPending) return (
      <div className="flex justify-center items-center min-h-screen">
        <HashLoader color="#6A38C2" />
      </div>
    );

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
    <div className="my-12 container mx-auto md:px-8">
      <div className="text-center  space-y-4">
        <h1 className="text-3xl  md:text-5xl font-clash dark:text-black  font-black">
          Find Your <span className="lowercase text-[#26A4FF]">Dream Job</span>{" "}
        </h1>
        <p className=" md:text-xl">
        Find your next career at companies that value your skills and passion, where you can <br /> grow professionally  and make a meaningful impact on the world
        </p>
      </div>

      <div className="my-4  shadow-[0px 79px 128px 0px rgba(192, 192, 192, 0.09), 0px 28.836px 46.722px 0px rgba(192, 192, 192, 0.06), 0px 13.999px 22.683px 0px rgba(192, 192, 192, 0.05), 0px 6.863px 11.119px 0px rgba(192, 192, 192, 0.04), 0px 2.714px 4.397px 0px rgba(192, 192, 192, 0.03]">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 px-4">
          <div className=" md:pt-8 md:w-2/4">
            <select
           onChange={e =>{setFilter(e.target.value)
            setCurrentPage(1)
           }}
           value={filter}
             
              name="sort"
              id="sort"
              className="border p-2 text-gray-700 bg-white   sm:mx-2 dark:bg-gray-900 dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 rounded-md md:w-full"
            >
               <option selected disabled value=''>Filter By Category</option>
              <option value='On Site'>On Site Job</option>
              <option value='Remote'>Remote Job</option>
              <option value='Hybrid'>Hybrid Job</option>
              <option value='Part Time'>Part Time Job</option>
              
            </select>
          </div>
         
          <form onSubmit={handleSearch} className="flex md:w-2/4 flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
             
            <input
            onChange={(e)=> setSearchText(e.target.value)}
            value={searchText}
              id="text"
              type="text"
              className="px-4 md:w-full  py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Enter Job Title "
            />

            <button className="px-4 py-2 md:w-1/4  text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10"> 
        <div className="flex px-4 items-center md:items-start flex-col md:flex-row gap-16 ">
          <div className="grid grid-cols-1  md:gap-6">
            <div className="">
              <div className="flex gap-4 lg:justify-between items-center mb-4">
                <h4 className="font-bold ">Categories</h4>
                <FaChevronDown className="cursor-pointer"></FaChevronDown>
              </div>

              <div className="flex items-center gap-x-3">
                <div></div>
                <input
                  type="checkbox"
                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"
                />
                <span>On Site ({jobs?.filter(job=> job.category === 'On Site').length})</span>
              </div>
              <div className="flex items-center gap-x-3">
                <div></div>
                <input
                  type="checkbox"
                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"
                />
                <span>Remote ({jobs?.filter(job=> job.category === 'Remote').length})</span>
              </div>
              <div className="flex items-center gap-x-3">
                <div></div>
                <input
                  type="checkbox"
                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"
                />
                <span>Hybrid ({jobs?.filter(job=> job.category === 'Hybrid').length})</span>
              </div>
              <div className="flex items-center gap-x-3">
                <div></div>
                <input
                  type="checkbox"
                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"
                />
                <span>Part Time ({jobs?.filter(job=> job.category === 'Part Time').length})</span>
              </div>
            </div>
            <div className="">
              <div className="flex gap-4 lg:justify-between items-center mb-4">
                <h4 className="font-bold ">Salary Range</h4>
                <FaChevronDown className="cursor-pointer"></FaChevronDown>
              </div>

              <div className="flex items-center gap-x-3">
                <div></div>
                <input
                  type="checkbox"
                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"
                />
                <span>$100 - $1000 (7)</span>
              </div>
              <div className="flex items-center gap-x-3">
                <div></div>
                <input
                  type="checkbox"
                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"
                />
                <span>$1000 - $1500 (7)</span>
              </div>
              <div className="flex items-center gap-x-3">
                <div></div>
                <input
                  type="checkbox"
                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"
                />
                <span>$2000 - $5000 (7)</span>
              </div>
              <div className="flex items-center gap-x-3">
                <div></div>
                <input
                  type="checkbox"
                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"
                />
                <span>$5000 - $8000 (7)</span>
              </div>
            </div>
          </div>

           
          <div className="xl:w-3/4 w-full space-y-4">
            {jobs?.map((job) => (
              <div key={job._id} className="border">
                <div className="flex items-center justify-between flex-col md:flex-row p-3 md:p-6 md:space-y-6 overflow-hidden rounded-md lg:shadow-md  ">
                  <div className="flex space-x-4">
                    <img
                      alt=""
                      src={job.pictureURL}
                      className="object-cover w-28 h-28 md:w-20 md:h-16 lg:w-28 lg:h-28 rounded-lg shadow "
                    />
                    <div className="flex flex-col space-y-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className=" lg:text-xl font-semibold"
                      >
                        {job.jobTitle}
                      </a>
                      <span className="text-sm ">
                        Post At: {new Date(job.postingDate).toLocaleDateString()}
                      </span>

                      <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-3 xl:gap-8">
                        <p className="text-sm bg-[#56cdad1a] text-[#56CDAD] text-center rounded-[80px]">{job.category}</p>

                        <p className="text-sm md:text-[12px]   rounded-[80px]  bg-[#FFB836] text-white text-center">Salary: ${job.min_salary} - ${job.max_salary}</p>
                        <p className="text-sm bg-[#4640DE] text-[white] text-center rounded-[80px]">Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center md:items-center mt-4 md:mt-0 flex-col gap-4">
                    <div>
                      <Link to={`/details/${job._id}`} onClick={handleViewDetails}  className="px-6 py-2    font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Details
                      </Link>
                    </div>
                    <div>
                      <progress
                        className="progress progress-error w-28"
                        value={job.applicants}
                        max="10"
                      >
                        <span></span>
                      </progress>
                      <p>{job.applicants} applied </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

{/* Pagination */}
<div className="flex justify-center">
    
    <button disabled={currentPage === 1} onClick={handlePrev} className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md  rtl:-scale-x-100 dark:bg-gray-800 hover:bg-blue-400 hover:text-white ">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    </button>
        {
            pages?.map(page=> <button onClick={()=>setCurrentPage(page)} key={page} href="#" className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform  rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${currentPage === page? 'bg-blue-500 text-white' : 'bg-white'}`}>
                {page}
            </button>)
        }
    

    <button onClick={()=>handleNext()} className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
    </button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
