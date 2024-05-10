
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const AddJob = () => {
    const {user} = useAuth()
    const [startDate, setStartDate] = useState(new Date())
    const [applicants, setApplicants] = useState(0)

    const handleFormSubmit = event=>{
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

        const jobData = {
            jobTitle, pictureURL, email,  userName, category, deadline, min_salary, max_salary, description, postingDate, applicants: 0, jobOwner: {
                email, 
                name: user?.displayName,
                photo: user?.photoURL
            }
        }
        console.log(jobData);

    }
    return (
        <section  className="max-w-4xl my-10 p-6 mx-auto  rounded-md shadow-md dark:bg-gray-800">
    <h2  className="text-lg font-semibold  capitalize ">Add A new Job</h2>

    <form onSubmit={handleFormSubmit}>
        <div  className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label  className=" " >Job Title</label>
                <input name="title"  type="text"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label  className=" " >Job Banner URL</label>
                <input name="bannerURL"  type="url"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
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
                <select
                name='category'
                id='category'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
              >
                <option value='On Time'>On Time</option>
                <option value='Remote'>Remote</option>
                <option value='Part Time'>Part Time</option>
                <option value='Hybrid'>Hybrid</option>
              </select>
            </div>


            <div className='  '>
              <label className=''> Application Deadline</label>
           
               <div className="w-full">
               <DatePicker
                className="block w-[100%]  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
               </div>
            
            </div>
            <div>
                <label  className=" " htmlFor="password">Min Salary</label>
                <input name="min_salary" id="price" type="number"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label  className=" " htmlFor="password">Max Salary</label>
                <input name="max_salary"  type="number"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

          
           
        </div>
        <div className="w-full mt-2">
                <label  className=" " htmlFor="passwordConfirmation">Job Description</label>
                <input name="description"  type="text"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        <div  className="flex justify-end mt-6">
            <button  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
    );
};

export default AddJob;