import { Link } from "react-router-dom";
import bgImage from '../../assets/images/bg1.avif'

const Slider1 = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[38rem]" 
               style={{ backgroundImage: `url(${bgImage})`   }}
             >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-5xl">Find Your   <span className="text-blue-400">Dream</span> With JobQuest</h1>
                <p className="text-white xl:text-[18px]">We help you find exciting opportunities around the world. Have the latest openings <br /> at your fingertips. Start your journey with JobQuest</p>
                <Link to="/all-jobs">
                <button className=" px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Explore Jobs</button>
                </Link>
                
            </div>
        </div>
    </div>
        </div>
    );
};

export default Slider1;