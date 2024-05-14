import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const ModalPopup = ({closeModal, isOpen, openModal, singleJob}) => {
  const {user} = useAuth()
const navigate = useNavigate()
  const { jobTitle,postingDate, deadline, min_salary, max_salary,applicants, description, category, jobOwner, _id, pictureURL } = singleJob || {}
  console.log(deadline);
  const handleFormSubmit = event =>{
    event.preventDefault()
    const form = event.target;
   
    const jobId = _id 
    const email = form.email.value
    if(email === jobOwner.email){
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `You cannot applied on your own job!😉;`,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
    const name = form.name.value
    const resume = form.resume.value;
    const currentDate = Date.now()
    const appliedAt = new Date().toLocaleDateString()
    if(currentDate > new Date(deadline).getTime()) {
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `The Application Deadline is Over! 😞;`,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
  
    
    const employeData = {
        jobId,
        email,
        jobTitle,
        name,
        resume,
        currentDate,
        jobOwner,
        category,
        applicants,
        min_salary,
         max_salary,
         appliedAt,
        jobOwner_email : jobOwner?.email

    }
    console.log(employeData)

    axios.post('https://jobquest-server-pi.vercel.app/applied', employeData )
    .then(res=>{
        console.log(res.data);
        Swal.fire({
            title: "Congratulations!",
            text: "Successfully Applied the job",
            icon: "success"
          });
          form.reset()
          navigate("/applied-jobs")
    })
    .catch((error)=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.response
              .data}`,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          console.log(error);
    })
  }


  return (
    <div>
      <div className="relative  flex justify-center">
       

        {isOpen && (
          <div
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex w-full items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform  bg-white rounded-lg shadow-xl sm:my-8 w-full sm:max-w-lg sm:p-6 sm:align-middle">
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                > Apply for the post of <span>{jobTitle}</span>
                  
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                 Here fill up the form carefully and submit your application for this post.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-4" action="#">
                  <label
                    htmlFor="emails-list"
                    className="text-sm text-gray-700 dark:text-gray-200"
                  >
                    Name
                  </label>

                  <label className="block mt-3" htmlFor="email">
                    <input
                      type="text"
                      name="name"
                      id="name"
                        defaultValue={user?.displayName}
                     
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>
                  <label
                    htmlFor="emails-list"
                    className="text-sm text-gray-700 dark:text-gray-200"
                  >
                    Email address
                  </label>

                  <label className="block mt-3" htmlFor="email">
                    <input
                      type="email"
                      name="email"
                      id="email"
                    defaultValue={user?.email}
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>
                  <label
                    htmlFor="emails-list"
                    className="text-sm text-gray-700 dark:text-gray-200"
                  >
                    Resume Link
                  </label>

                  <label className="block mt-3" htmlFor="email">
                    <input
                      type="text"
                      name="resume"
                      id="resume"
                        placeholder="Enter Your Resume link"
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>

                 

                 
                    

                  

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      
                      className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                     Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalPopup;
