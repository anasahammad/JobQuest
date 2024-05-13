import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import useAuth from "../hooks/useAuth";
import { HashLoader } from "react-spinners";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyJobs = () => {
    const {user} = useAuth()
    const {isPending,data: jobs, refetch} = useQuery({
        queryKey: ['jobs'],
        queryFn: async ()=>{
            const res = await axios(`http://localhost:5000/jobs/${user?.email}`, {withCredentials: true})
            return res.data
        }
    })
    if (isPending) return <div className="flex justify-center items-center min-h-screen"><HashLoader color="#6A38C2" /></div>;

    const handleDelete = (id)=>{
        // axios.delete(`http://localhost:5000/jobs/${id}`)
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`http://localhost:5000/jobs/${id}`)
              .then(res=>{
                if(res.data.deletedCount > 0){
                    refetch()
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
              })
             
             
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
    }

  return (
    <section className="container px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium  dark:text-white">
          Total Jobs
        </h2>

        <span className="px-3 py-1 text-xs   rounded-full  ">
          {jobs?.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className=" ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right 
                      "
                    >
                      <div className="flex font-bold items-center gap-x-3">
                        <span>Job Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right 
                      "
                    >
                      <button className="flex font-bold items-center gap-x-2">
                        <span>Category</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right 
                      "
                    >
                      <button className="flex items-center font-bold gap-x-2">
                        <span>Salary Range</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                          />
                        </svg>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right 
                      "
                    >
                      Deadline
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right  
                      "
                    >
                      Total Applied
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                 
                 {
                    jobs.map(job=> <tr key={job._id}>
                        <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div>
                              <h2 className="font-medium  dark:text-white ">
                                {job.jobTitle}
                              </h2>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium  whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2  ">
                            
    
                            <h2 className="text-sm font-normal ">
                              {job.category}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">
                        <p className='mt-2 text-sm font-bold  '>
           ${job.min_salary} - ${job.max_salary}

        </p>
                        </td>
                        <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">
                        <p   className="   ">Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p className="px-3 py-1 text-xs  rounded-full  ">
                              {job.applicants}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div  className="flex items-center gap-x-6">
                            <button onClick={()=>handleDelete(job._id)} className=" transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 text-red-600 focus:outline-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
    
                            <Link to={`/update/${job._id}`} className=" transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>)
                 }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default MyJobs;
