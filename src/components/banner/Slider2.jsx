import { Link } from "react-router-dom";
import bgImage from '../../assets/images/bg2.jpg'
import { motion } from 'framer-motion';


const Slider2 = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[38rem]" 
               style={{ backgroundImage: `url(${bgImage})`   }}
             >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
                <motion.h1 initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
        style={{ fontFamily: 'Arial',  }}>
                
        <h1 className="text-3xl font-semibold text-white lg:text-5xl">Find Your   <span className="text-blue-400">Dream</span> Job With JobQuest</h1>
                </motion.h1>
                
                <motion.p  initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
                <p className="text-white xl:text-[18px]">We help you find exciting opportunities around the world. Have the latest openings <br /> at your fingertips. Start your journey with JobQuest</p>
                </motion.p>
               
                <Link to="/all-jobs">
                    <motion.button 
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                    
                    >
                    <button className=" px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Explore Jobs</button>
                    </motion.button>
               
                </Link>
                
            </div>
        </div>
    </div>
        </div>
    );
};

export default Slider2;