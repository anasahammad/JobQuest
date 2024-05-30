
import { useState } from 'react'

import { useMutation } from '@tanstack/react-query'



import UpdateUserModal from '../UpdateUserModal'
import axios from 'axios'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'

const UserDataRow = ({ user, refetch }) => {
    
    const [isOpen, setIsOpen] = useState(false)
    
    const {user: loggedInUser} =   useAuth()

    const {mutateAsync} = useMutation({
        mutationFn: async  (role)=>{
            const {data} = await axios.patch(`http://localhost:5000/users/update/${user?.email}`, role)
            return data
        },
        onSuccess: ()=>{
            refetch()
            // toast.success("Role Updated Successful")
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Role Updated Successful",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
    const modalHandler = async (selected)=>{
        if(loggedInUser.email === user?.email) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Action not allowed",
                showConfirmButton: false,
                timer: 1500
              });
            setIsOpen(false)
            return
        }
        const updateRole = {
            role: selected,
            status: 'Verified'
        }
        try {
            await mutateAsync(updateRole)
        } catch (error) {
            // toast.error(error.message)
        }
    }
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${
              user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={()=>setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span 
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </button>
        <UpdateUserModal modalHandler={modalHandler} user={user} isOpen={isOpen} setIsOpen={setIsOpen}></UpdateUserModal>
      </td>
    </tr>
  )
}



export default UserDataRow