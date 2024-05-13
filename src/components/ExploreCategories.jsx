import { FaFileInvoice } from "react-icons/fa";
import { FaCaravan } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaFighterJet } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
const ExploreCategories = () => {
    return (
        <div >
            <div className="text-center">
        <h1 className="text-3xl font-bold">Explore Top Categories</h1>
        <p className="my-4">
        Explore our diverse range of job categories and find the perfect opportunity to match your skills and interests.
        </p>
      </div>

        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-5">
        <div className="max-w-xs mx-auto p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div >
<FaFileInvoice className="w-20 h-20 text-blue-400"/>
        </div>
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">Accounting & Finance</h2>
	</div>
	<p className="dark:text-gray-800">You can view all popular jobs according your future careers.</p>
    
    <p className="text-xl font-semibold text-blue-400">122 Active Jobs</p>

</div>
        <div className="max-w-xs mx-auto  p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div >
<FaCaravan className="w-20 h-20 text-blue-400"/>
        </div>
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">Automotive Jobs</h2>
	</div>
	<p className="dark:text-gray-800">You can view all popular jobs according your future careers.</p>
    
    <p className="text-xl font-semibold text-blue-400">85 Active Jobs</p>

</div>
        <div className="max-w-xs mx-auto  p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div >
<FaPersonChalkboard className="w-20 h-20 text-blue-400"/>
        </div>
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">Business & Tech</h2>
	</div>
	<p className="dark:text-gray-800">You can view all popular jobs according your future careers.</p>
    
    <p className="text-xl font-semibold text-blue-400">25 Active Jobs</p>

</div>
        <div className="max-w-xs mx-auto  p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div >
<FaUserGraduate className="w-20 h-20 text-blue-400"/>
        </div>
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">Education Training</h2>
	</div>
	<p className="dark:text-gray-800">You can view all popular jobs according your future careers.</p>
    
    <p className="text-xl font-semibold text-blue-400">255 Active Jobs</p>

</div>
        <div className="max-w-xs mx-auto  p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div >
<FaBriefcaseMedical className="w-20 h-20 text-blue-400"/>
        </div>
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">Healthcare</h2>
	</div>
	<p className="dark:text-gray-800">You can view all popular jobs according your future careers.</p>
    
    <p className="text-xl font-semibold text-blue-400">90 Active Jobs</p>

</div>
        <div className="max-w-xs mx-auto  p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div >
<FaHamburger className="w-20 h-20 text-blue-400"/>
        </div>
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">Restaurant & Food</h2>
	</div>
	<p className="dark:text-gray-800">You can view all popular jobs according your future careers.</p>
    
    <p className="text-xl font-semibold text-blue-400">65 Active Jobs</p>

</div>
        <div className="max-w-xs mx-auto  p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div >
<FaFighterJet className="w-20 h-20 text-blue-400"/>
        </div>
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">Transportation</h2>
	</div>
	<p className="dark:text-gray-800">You can view all popular jobs according your future careers.</p>
    
    <p className="text-xl font-semibold text-blue-400">160 Active Jobs</p>

</div>
        <div className="max-w-xs mx-auto p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div >
<FaMobileScreen className="w-20 h-20 text-blue-400"/>
        </div>
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">Telecommunications</h2>
	</div>
	<p className="dark:text-gray-800">You can view all popular jobs according your future careers.</p>
    
    <p className="text-xl font-semibold text-blue-400">120 Active Jobs</p>

</div>
        </div>
     

        </div>
    );
};

export default ExploreCategories;