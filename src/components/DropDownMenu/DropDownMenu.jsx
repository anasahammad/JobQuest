import {  MenuItem, MenuItems, Transition } from '@headlessui/react'
import { FaUserEdit } from "react-icons/fa";
import useRole from '../../hooks/useRole';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import HostModal from '../HostModal';
import { Link } from 'react-router-dom';

const DropDownMenu = () => {
      const [role, isLoading] = useRole()
      const {user} = useAuth()
      const [isOpen, setIsOpen] = useState(false)


      const closeModal = ()=>{
        setIsOpen(false)
      }
      const modalHandler = async ()=>{
        
        try {
          const currentUser = {
            email: user?.email,
            role: 'guest',
            status: 'Requested'
          }
      
          const {data} = await axios.put(`https://jobquest-server-pi.vercel.app/user`, currentUser)
          if(data.modifiedCount > 0){
            // toast.success("Success! Wait for admin approval")
          }
          else{
            // toast.success("Please! Wait for admin aproval")
          }
        } catch (error) {
          console.log(error);
          // toast.error(error.message)
        }
      }




      if (isLoading) return (
        <div className="flex justify-center items-center min-h-screen">
          <HashLoader color="#6A38C2" />
        </div>
      );
   
    return (
      <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Dropdown</div>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li><a>Item 1</a></li> 
          <li><a>Item 2</a></li>
        </ul>
      </div>
    
      </>
//         <div className="fixed inset-x-0 z-50 top-24 w-52 text-right">
     
       
//         <Transition
//           enter="transition ease-out duration-75"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-100"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <MenuItems
//             anchor="bottom end"
//             className="w-52 origin-top-right rounded-xl border   inset-x-0 z-20  px-6 py-4   bg-base-100     [--anchor-gap:var(--spacing-1)] focus:outline-none"
//           >

// {role === 'guest' && (

//   <MenuItem>
//               <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                
//                 Applied Jobs
//                 <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
//               </button>
//             </MenuItem>


            
// ) }

// <Link to="/add-job">
// <MenuItem >

//               <button onClick={()=>setIsOpen(true)}  className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                
//                 Add A Job
//                 <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
//               </button>
             
//             </MenuItem>
// </Link>


// <HostModal isOpen={isOpen} closeModal={closeModal} modalHandler={modalHandler}></HostModal>
           
//               {role === 'host' && (<MenuItem >
//               <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
               
//                 Add A Job
//                 <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
//               </button>
//             </MenuItem>)}

//             { role === 'admin' && (<MenuItem >
//               <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
               
//                 Archive
//                 <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
//               </button>
//             </MenuItem>) }
//             <div className="my-1 h-px bg-white/5" />
//             <MenuItem>
//               <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
//               <FaUserEdit className="size-4 fill-white/30" />
//                 Profile
//                 <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘P</kbd>
//               </button>
//             </MenuItem>
//             <MenuItem>
//               <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              
//               Logout
//                 <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
//               </button>
//             </MenuItem>
//           </MenuItems>
//         </Transition>
      
//     </div>
    );
};

export default DropDownMenu;