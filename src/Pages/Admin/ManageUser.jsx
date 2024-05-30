import { useQuery } from '@tanstack/react-query'


import axios from 'axios'
import { HashLoader } from 'react-spinners'
import UserDataRow from '../../components/TableRow/UserDataRow'
const ManageUsers = () => {
    
    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await axios('http://localhost:5000/users')
            return res.data;
        }
    })

    if (isLoading) return (
        <div className="flex justify-center items-center min-h-screen">
          <HashLoader color="#6A38C2" />
        </div>
      );
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {users?.map(user=> <UserDataRow refetch={refetch} key={user?._id} user={user}></UserDataRow>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageUsers