import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../src/assets/logo.svg"
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

import useRole from "../hooks/useRole";
import { HashLoader } from "react-spinners";
import HostModal from "../components/HostModal";
import axios from 'axios'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
   const [role, isLoading] = useRole()
    const handleToggleOpen = ()=>{
        setIsOpen(!isOpen)
    } 
 const {user,  signOutUser} = useAuth() || {}
 const navigate = useNavigate()




 const closeModal = ()=>{
  setIsDropDownOpen(false)
}
const modalHandler = async ()=>{
  
  try {
    const currentUser = {
      email: user?.email,
      role: 'guest',
      status: 'Requested'
    }

    const {data} = await axios.put(`http://localhost:5000/user`, currentUser)
    if(data.modifiedCount > 0){
     
      // console.log("You become host")
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Success! Wait for admin approval",
        showConfirmButton: false,
        timer: 1500
      });
     
    }
    else{
     
      console.log("THere something wrong")
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Please! Wait for admin aproval",
        showConfirmButton: false,
        timer: 1500
      });
    }
  } catch (error) {
    console.log(error);
    
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: `error.message`,
      showConfirmButton: false,
      timer: 1500
    });
  }
}

    
    const handleTheme = (event) => {
        if (event.target.checked) {
          setTheme("synthwave");
          localStorage.setItem("theme", "synthwave");
        } else {
          setTheme("light");
          localStorage.setItem("theme", "light");
        }
      };

      const handleSignOut = () => {
        signOutUser().then(() => {
          Swal.fire({
            title: "Congratulations!",
            text: "Sign Out Successful",
            icon: "success",
          });
        });
      };
    
      useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);

      if (isLoading) return (
        <div className="flex justify-center items-center min-h-screen">
          <HashLoader color="#6A38C2" />
        </div>
      );
    return (
        <nav  className="relative  shadow">
    <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
            <Link to="/" className="flex gap-3">
                <img className="w-auto h-6 sm:h-7" src={logo} alt=""/>
                <h1 className="font-semibold ">JobQuest</h1>
            </Link>

            {/* <!-- Mobile menu button --> */}
            <div className="flex  lg:hidden">

            {
                user && <div data-tip={user?.displayName} className="mr-2 lg:hidden tooltip tooltip-bottom dropdown">
                <img alt="" className="w-11 h-11 border cursor-pointer rounded-full dark:bg-gray-500 dark:border-gray-300" src={user?.photoURL} />
                </div>
            }
            <label className="swap swap-rotate mr-3">
  
  {/* this hidden checkbox controls the state */}
  <input  checked={theme === "synthwave"}
            type="checkbox"
            onChange={handleTheme}
            className=" theme-controller" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>

                <button onClick={handleToggleOpen}   type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    {
                        !isOpen ? ( <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>) : ( <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>)
                    }
                   
            
                   
                </button>
            </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div  className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-base-100   lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          
            <div className="flex flex-col lg:items-center lg:flex-row lg:mx-6">
                <Link to="/" className="my-2   transition-colors duration-300 transform hover:text-[#6A38C2]  md:mx-4 md:my-0">Home</Link>
                <Link to="/blogs" className="my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0">Blogs</Link>
                <Link to="/all-jobs" className="my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0">All Jobs</Link>
                
               
               
               
                
                    
                <Link to="" className="my-2  transition-colors duration-300 transform lg:hidden dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0">Profile</Link> 
                
                {
                    user? 
                    <>
                    {
                      role === 'host' && (<>
                       <Link to="/add-job" className="my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0 lg:hidden">Add A Job</Link>
                    <Link to="/my-jobs" className="my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0 lg:hidden">My Jobs</Link>
                      
                      </>)
                    }
                   { role === 'guest' && (<>
                    <Link to="/applied-jobs" className="my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0 lg:hidden">Applied Jobs</Link>
                   </>)}
                    {role === 'admin' && (<>
                      <Link  className="my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0 lg:hidden">Statistics</Link>
                      <Link to="/manage-users" className="my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0 lg:hidden">Manage Users</Link>
                    </>)}
                    <button onClick={handleSignOut} type="button" className="px-4 py-2 font-semibold border bg-primary text-white rounded  ">Sign Out</button>
                    </>
                    
                   : <Link to="/login" className="my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0 ">
                    <button type="button" className="px-4 py-2 font-semibold border bg-primary text-white rounded  ">Sign In</button>
                    </Link>
                }
              
                
             
               
                    
            </div>
            {
                user && 


                <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button"  data-tip={user?.displayName}  className="mr-2  hidden lg:block tooltip tooltip-bottom">
                <img alt="" className="w-11 h-11 border cursor-pointer rounded-full dark:bg-gray-500 dark:border-gray-300" src={user?.photoURL} />
                
               
        
        <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              
          {role === 'guest' && (<>
            <li>
            <Link to="/applied-jobs">Applied Jobs</Link>
            </li> 
            <li>
            <Link>
              <button onClick={()=>setIsDropDownOpen(true)}>Add A job</button>
            </Link>
            </li> 
            <HostModal modalHandler={modalHandler} closeModal={closeModal} isOpen={isDropDownOpen} ></HostModal>
          </>)}

          {role === 'host' && (<>
          <li>
            <Link to="/add-job">Add A Job</Link>
          </li>
          <li>
            <Link to="/my-jobs">My Jobs</Link>
          </li>
            
          </>)}

          { role === 'admin' && (<>
            <li>

              <Link>Statistics</Link>
            </li>
            <li>
              <Link to="/manage-users">Manage Users</Link>
            </li>
          </>)}
            
          <li>
            <Link>Profile</Link>
          </li>
        </ul>
      </div>
    
                </div>
        
               
                
            }
            

            <div className=" hidden lg:block">
                
            <label className="swap swap-rotate ">
  
  {/* this hidden checkbox controls the state */}
  <input checked={theme === "synthwave"}
            type="checkbox"
            onChange={handleTheme} className="theme-controller "  />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>

                    
              
            </div>
        </div>
    </div>
</nav>
    );
};

export default Navbar;