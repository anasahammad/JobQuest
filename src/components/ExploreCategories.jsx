import { FaFileInvoice } from "react-icons/fa";
import { FaCaravan } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaFighterJet } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import {motion} from 'framer-motion'
const ExploreCategories = () => {
    return (
        <div >
            <div className="text-center">
        <motion.h1 
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
                delay: 0.4,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
        }}
        className="text-3xl font-bold">Explore Top Categories</motion.h1>
        <motion.p
         initial={{x: 50, opacity: 0}}
         whileInView={{x: 0, opacity: 1}}
         transition={{
                 delay: 0.4,
                 x: {type: "spring", stiffness: 60},
                 opacity: {duration: 0.2},
                 ease: "easeIn",
                 duration: 1,
         }}
        className="my-4">
        Explore our diverse range of job categories and find the perfect opportunity to match your skills and interests.
        </motion.p>
      </div>

        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-5">
        <motion.div whileHover={{ scale: 1.1 }} className="max-w-xs mx-auto p-6 rounded-md shadow-md  ">
        <div >
                <motion.p
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.2,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1,
                }}
                >
                <FaFileInvoice className="w-20 h-20 text-blue-400"/>
                </motion.p>

        </div>
	<div className="mt-6 mb-2">
		
		<motion.h2   initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.2,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1,
                }} className="text-xl font-semibold tracking-wide">Accounting & Finance</motion.h2>
	</div>
	<motion.p   initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.2,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1,
                }} className="">You can view all popular jobs according your future careers.</motion.p>
    
    <motion.p   initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.2,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1,
                }} className="text-xl font-semibold text-blue-400">122 Active Jobs</motion.p>

</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="max-w-xs mx-auto  p-6 rounded-md shadow-md  ">
        <div >
                <motion.p 
                 initial={{y: 100, opacity: 0}}
                 whileInView={{y: 0, opacity: 1}}
                 transition={{
                         delay: 0.4,
                         y: {type: "spring", stiffness: 60},
                         opacity: {duration: 0.2},
                         ease: "easeIn",
                         duration: 1,
                 }}
                >
                <FaCaravan className="w-20 h-20 text-blue-400"/>
                </motion.p>

        </div>
	<div className="mt-6 mb-2">
		
		<motion.h2
                 initial={{y: 100, opacity: 0}}
                 whileInView={{y: 0, opacity: 1}}
                 transition={{
                         delay: 0.5,
                         y: {type: "spring", stiffness: 60},
                         opacity: {duration: 0.2},
                         ease: "easeIn",
                         duration: 1,
                 }} className="text-xl font-semibold tracking-wide">Automotive Jobs</motion.h2>
	</div>
	<motion.p  initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.5,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1,
                }} className="">You can view all popular jobs according your future careers.</motion.p>
    
    <motion.p  initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.5,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1,
                }} className="text-xl font-semibold text-blue-400">85 Active Jobs</motion.p>

</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="max-w-xs mx-auto   p-6 rounded-md shadow-md  ">
        <div >
                <motion.p  initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
                delay: 0.6,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
        }}>

                <FaPersonChalkboard className="w-20 h-20 text-blue-400"/>
                </motion.p>

        </div>
	<div className="mt-6 mb-2">
		
		<motion.h2 initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
                delay: 0.6,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
        }} className="text-xl font-semibold tracking-wide">Business & Tech</motion.h2>
	</div>
	<p className="">You can view all popular jobs according your future careers.</p>
    
    <motion.p initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
                delay: 0.6,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
        }} className="text-xl font-semibold text-blue-400">25 Active Jobs</motion.p>

</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="max-w-xs mx-auto  p-6 rounded-md shadow-md  ">
        <div >
                <motion.p 
                  initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
                delay: 0.8,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1.2,
        }}>
                <FaUserGraduate className="w-20 h-20 text-blue-400"/>
                </motion.p>

        </div>
	<div className="mt-6 mb-2">
		
		<motion.h2 initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
                delay: 0.8,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1.2,
        }} className="text-xl font-semibold tracking-wide">Education Training</motion.h2>
	</div>
	<motion.p initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
                delay: 0.8,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1.2,
        }} className="">You can view all popular jobs according your future careers.</motion.p>
    
    <motion.p initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
                delay: 0.8,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1.2,
        }} className="text-xl font-semibold text-blue-400">255 Active Jobs</motion.p>

</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="max-w-xs mx-auto  p-6 rounded-md shadow-md  ">
        <div >
                <motion.p 
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.2,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }}
                
                >

<FaBriefcaseMedical className="w-20 h-20 text-blue-400"/>
                </motion.p>
        </div>
	<div className="mt-6 mb-2">
		
		<motion.h2 initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.2,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="text-xl font-semibold tracking-wide">Healthcare</motion.h2>
	</div>
	<motion.p initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.2,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="">You can view all popular jobs according your future careers.</motion.p>
    
    <motion.p initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.2,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="text-xl font-semibold text-blue-400">90 Active Jobs</motion.p>

</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="max-w-xs mx-auto  p-6 rounded-md shadow-md  ">
        <div >
                <motion.p  initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.4,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }}>

<FaHamburger className="w-20 h-20 text-blue-400"/>
                </motion.p>
        </div>
	<div className="mt-6 mb-2">
		
		<motion.h2 initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.4,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="text-xl font-semibold tracking-wide">Restaurant & Food</motion.h2>
	</div>
	<motion.p initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.4,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="">You can view all popular jobs according your future careers.</motion.p>
    
    <motion.p initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.2,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="text-xl font-semibold text-blue-400">65 Active Jobs</motion.p>

</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="max-w-xs mx-auto  p-6 rounded-md shadow-md  ">
        <div >
                <motion.p initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.6,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }}>

<FaFighterJet className="w-20 h-20 text-blue-400"/>
                </motion.p>
        </div>
	<div className="mt-6 mb-2">
		
		<motion.h2 initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.6,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="text-xl font-semibold tracking-wide">Transportation</motion.h2>
	</div>
	<motion.p initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.6,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="">You can view all popular jobs according your future careers.</motion.p>
    
    <motion.p initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.2,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="text-xl font-semibold text-blue-400">160 Active Jobs</motion.p>

</motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="max-w-xs mx-auto p-6 rounded-md shadow-md  ">
        <div >
                <motion.p initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.8,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }}>

<FaMobileScreen className="w-20 h-20 text-blue-400"/>
                </motion.p>
        </div>
	<div className="mt-6 mb-2">
		
		<motion.h2 initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.8,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="text-xl font-semibold tracking-wide">Telecommunications</motion.h2>
	</div>
	<motion.p initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.6,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="">You can view all popular jobs according your future careers.</motion.p>
    
    <motion.p initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                        delay: 0.6,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1.2,
                }} className="text-xl font-semibold text-blue-400">120 Active Jobs</motion.p>

</motion.div>
        </div>
     

        </div>
    );
};

export default ExploreCategories;