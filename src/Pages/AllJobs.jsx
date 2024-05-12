
const AllJobs = () => {
    return (
        <div className="my-12 container mx-auto lg:px-8">
            <div className="text-center  space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-clash dark:text-black  text-[#25324B] font-black">Find Your <span className="lowercase text-[#26A4FF]">Dream Job</span> </h1>    
                <p className="text-[#515B6F] lg:text-xl">Find your next career at companies like HubSpot, Nike, and Dropbox</p>
                        </div>

                        <div className="my-4  shadow-[0px 79px 128px 0px rgba(192, 192, 192, 0.09), 0px 28.836px 46.722px 0px rgba(192, 192, 192, 0.06), 0px 13.999px 22.683px 0px rgba(192, 192, 192, 0.05), 0px 6.863px 11.119px 0px rgba(192, 192, 192, 0.04), 0px 2.714px 4.397px 0px rgba(192, 192, 192, 0.03]">
                            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 px-4">
                                <div className=" lg:pt-8 lg:w-2/4">
                                <select
            
              name='category'
              id='category'
              className='border p-2 text-gray-700 bg-white   sm:mx-2 dark:bg-gray-900 dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 rounded-lg lg:w-full'
            >
              <option selected disabled value=''>Sort By Deadline</option>
              <option value='On Site'>On Site Job</option>
              <option value='Remote'>Remote Job</option>
              <option value='Hybrid'>Hybrid Job</option>
              <option value='Part Time'>Part Time Job</option>
            </select>
                                </div>
                                <div className="flex lg:w-2/4 flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input id="text" type="text" className="px-4 lg:w-full  py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Enter Job Title "/>

            <button className="px-4 py-2 lg:w-1/4  text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Search
            </button>
        </div>
                            </div>
                        </div>
        </div>
    );
};

export default AllJobs;