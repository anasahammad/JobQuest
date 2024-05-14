import useAuth from "../hooks/useAuth";
import { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateJob = () => {
    const {user} = useAuth()
    const [startDate, setStartDate] = useState(new Date())
    const navigate = useNavigate()
    const job = useLoaderData()
    const { jobTitle,postingDate, deadline, min_salary, max_salary,applicants, description, category, jobOwner, _id, pictureURL } = job;
    console.log(job)

    const handleFormSubmit = (event)=>{
        event.preventDefault()
        const form = event.target;
        const jobTitle = form.title.value;
        const pictureURL = form.bannerURL.value;
        const userName = user?.displayName;
        const email = form.email.value;
        const category = form.category.value;
        const deadline = startDate;
        const min_salary = parseFloat(form.min_salary.value);
        const max_salary = parseFloat(form.max_salary.value);
        const description = form.description.value;
        const postingDate = new Date()
       

        const updateJob = {
            jobTitle, pictureURL, email,  userName, category, deadline, min_salary, max_salary, description, postingDate, applicants: 0, jobOwner: {
                email, 
                name: user?.displayName,
                photo: user?.photoURL
            }
        }
        
      
        axios.patch(`https://jobquest-server-pi.vercel.app/job/${_id}`, updateJob )
        .then(res=>{
            console.log(res.data);
            Swal.fire({
                title: "Congratulations!",
                text: "Job Updated Successfully",
                icon: "success"
              });
              form.reset()
              navigate("/my-jobs")
        })
        .catch((error)=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })

    }
    return (
        <section  className="max-w-4xl my-10 p-6 mx-auto  rounded-md shadow-md dark:bg-gray-800">
    <h2  className="text-lg font-semibold  capitalize ">Update the Job</h2>

    <form onSubmit={handleFormSubmit}>
        <div  className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label  className=" " >Job Title</label>
                <input required name="title"  type="text"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label  className=" " >Job Banner URL</label>
                <input required name="bannerURL"  type="url"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label  className=" " >User Name</label>
                <input disabled defaultValue={user?.displayName} name="userName"  type="text"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label  className=" ">Email Address</label>
                <input  name="email" disabled defaultValue={user?.email} id="emailAddress" type="email"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label  className=" ">Job Category</label>
                <select required
                name='category'
                id='category'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              >
                <option value='On Site'>On Site</option>
                <option value='Remote'>Remote</option>
                <option value='Hybrid'>Hybrid</option>
                <option value='Part Time'>Part Time</option>
               
              </select>
            </div>


            <div className='  '>
              <label className=''> Application Deadline</label>
           
               <div className="w-full">
               <DatePicker required
                className="block w-[100%]  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
               </div>
            
            </div>
            <div>
                <label  className=" " htmlFor="password">Min Salary</label>
                <input required name="min_salary" id="price" type="number"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label  className=" " htmlFor="password">Max Salary</label>
                <input required name="max_salary"  type="number"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

          
           
        </div>
        <div className="w-full mt-2">
                <label  className=" " htmlFor="passwordConfirmation">Job Description</label>
                <input required name="description"  type="text"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        <div  className="flex justify-end mt-6">
            <button  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
    );
};

export default UpdateJob;