import { FaChevronDown } from "react-icons/fa";
const AllJobs = () => {
    return (
        <div className="my-12 container mx-auto md:px-8">
            <div className="text-center  space-y-4">
                <h1 className="text-3xl  md:text-5xl font-clash dark:text-black  text-[#25324B] font-black">Find Your <span className="lowercase text-[#26A4FF]">Dream Job</span> </h1>    
                <p className="text-[#515B6F] md:text-xl">Find your next career at companies like HubSpot, Nike, and Dropbox</p>
                        </div>

                        <div className="my-4  shadow-[0px 79px 128px 0px rgba(192, 192, 192, 0.09), 0px 28.836px 46.722px 0px rgba(192, 192, 192, 0.06), 0px 13.999px 22.683px 0px rgba(192, 192, 192, 0.05), 0px 6.863px 11.119px 0px rgba(192, 192, 192, 0.04), 0px 2.714px 4.397px 0px rgba(192, 192, 192, 0.03]">
                            <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 px-4">
                                <div className=" md:pt-8 md:w-2/4">
                                <select
            
              name='category'
              id='category'
              className='border p-2 text-gray-700 bg-white   sm:mx-2 dark:bg-gray-900 dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 rounded-md md:w-full'
            >
              <option selected disabled value=''>Sort By Deadline</option>
              <option value='On Site'>On Site Job</option>
              <option value='Remote'>Remote Job</option>
              <option value='Hybrid'>Hybrid Job</option>
              <option value='Part Time'>Part Time Job</option>
            </select>
                                </div>
                                <div className="flex md:w-2/4 flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input id="text" type="text" className="px-4 md:w-full  py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Enter Job Title "/>

            <button className="px-4 py-2 md:w-1/4  text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Search
            </button>
        </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex px-4 md:items-start flex-col md:flex-row md:gap-16 ">
                                <div className="grid grid-cols-1 md:gap-6">
                                    <div className="">
                                        <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-bold ">Categories</h4>
                                        <FaChevronDown className="cursor-pointer"></FaChevronDown>
                                        </div>
                                       
                                    <div className="flex items-center gap-x-3">
                                    <div></div>
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"/>
                                        <span>On Site (7)</span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                    <div></div>
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"/>
                                        <span>Remote (4)</span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                    <div></div>
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"/>
                                        <span>Hybrid (4)</span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                    <div></div>
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"/>
                                        <span>Part Time (3)</span>
                                    </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-bold ">Salary Range</h4>
                                        <FaChevronDown className="cursor-pointer"></FaChevronDown>
                                        </div>
                                       
                                    <div className="flex items-center gap-x-3">
                                    <div></div>
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"/>
                                        <span>$100 - $1000 (7)</span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                    <div></div>
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"/>
                                        <span>$1000 - $1500 (7)</span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                    <div></div>
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"/>
                                        <span>$2000 - $5000 (7)</span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                    <div></div>
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 h-4 w-8"/>
                                        <span>$5000 - $8000 (7)</span>
                                    </div>
                                    </div>
                                
                                </div>

                                <div  className="md:w-3/4">
                                    <div className="border">
                                    <div className="flex  justify-between flex-col md:flex-row p-3 md:p-6 md:space-y-6 overflow-hidden rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Frontend Engineer</a>
			<span className="text-xs dark:text-gray-600">Job-owner: Anas Ahammad</span>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <p>Posted At: 5/10/15 </p>
            
            <p>Salary Range: $500 - 1000</p>
            <p>Deadline: 5/10/20</p>
            
        </div>
		</div>

        
	</div>
        
        <div className="flex items-center md:items-center mt-4 md:mt-0 flex-col gap-4">
            <div>
            <button className="px-6 py-2    font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
               Details
            </button>
            </div>
                <div>
                <progress className="progress progress-error w-28" value="40" max="100">
                <span></span>
                </progress>
                    <p>5 applied </p>
                </div>
          
        </div>
	
</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default AllJobs;