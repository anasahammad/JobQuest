import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import errorAnimation from '../assets/404page.json'
import img from '../assets/images/bg1.avif'
import Lottie from "lottie-react";
const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
            <Lottie className=" h-72" loop={true} animationData={errorAnimation} />
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                <Link to="/">
                    <motion.button 
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                    
                    >
                    <button className=" px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Back to Home</button>
                    </motion.button>
               
                </Link>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;