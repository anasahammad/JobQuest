import Lottie from "lottie-react";
import registerAnimation from "../assets/registration.json"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
const Register = () => {
    const { createUser} = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const navigate = useNavigate()
      const [fileName, setFileName] = useState('')
      const [selectImage, setSelectImage] = useState(null)

      const handleForm = async (data) =>{
        
        const {email, password, name} = data;

        // const image = data.photo[0]
        // console.log(image);
        const formData = new FormData()
        formData.append('image', selectImage)
        const response =  await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, formData)
      
        const photo = response.data.data.display_url;
        console.log(photo);
            const user = {name, email, password, photo};
            console.log(user);
            createUser(email, password)
            .then(result=> {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                  })
                  .then(()=>{
                    Swal.fire({
                        title: "Congratulations",
                        text: "Account Registration Successful",
                        icon: "success"
                      });
                      navigate("/")
                  })
                
                 
            })
            .catch(error=> {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message.replace('Firebase: Error (auth/', ' ').replace(/\)/, '')}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            })
      }

      const handleImagePreview = (file )=>{
            if(file){

                setFileName(file.name)
                setSelectImage(file)
            }
            else{
                setFileName('')
            }
        
      }
    return (
        <section className="  container mx-auto dark:bg-gray-900">
        <div className="flex flex-col md:flex-row">
        <div className=" flex-2 max-w-md  ml-8 ">
                    <Lottie className=" " loop={true} animationData={registerAnimation} />
                    </div>
                    <div className="container flex-1 flex items-center justify-center min-h-screen px-6 mx-auto ">
            <form onSubmit={handleSubmit(handleForm)} className="w-full max-w-md">
                
                
            <h1 className="mt-3 text-center text-2xl font-semibold  capitalize sm:text-3xl dark:text-white">Sign Up</h1>
    
                <div className="relative flex items-center mt-8">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
    
                    <input {...register('name', {
            required: true
          })} type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Full Name"/>
          
                </div>
                {errors.name && <span className="text-red-600">This name is required to sign up</span>}
               
                
            
                <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </span>

              <input
  {...register("photo")}
  type="file"
  id="fileUpload"
  name="photo" 
  className="hidden"
  accept="image/*" // Allow only image files
  onChange={e => handleImagePreview(e.target.files[0])}
/>

              <input
               
                type="text"
                value={fileName}
                readOnly
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 cursor-pointer"
                placeholder="Upload Photo"
              />

              <label
                htmlFor="fileUpload"
                className="ml-2 py-3 text-white bg-blue-500  border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 cursor-pointer"
              >
                Browse
              </label>
            </div>



    
                <div className="relative flex items-center mt-6">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
    
                    <input {...register("email", { required: true })} type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
                    
                </div>
                {errors.email && <span className="text-red-600 block">This email is required to sign up</span>}
    
                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
    
                    <input 
                    
                    {...register("password", {
                     required: "Password is required", 
                     minLength: {
                       value: 6, 
                       message: "Password must be at least 6 characters"
                     }, 
                     validate: {
                       upperCase: (value)=> /[A-Z]/.test(value) || "Password must have  at least one UpperCase letter", 
                       lowerCase: (value)=> /[a-z]/.test(value) || "Password must have  at least one LowerCase letter" 
         
                     }
                   })}
                    type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
                     
                </div>
                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
               
    
                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign Up
                    </button>
    
                    <div className="mt-6 text-center ">
                        <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                            Already have an account? <Link to="/login">Sign In</Link>
                        </a>
                    </div>
                </div>
            </form>
        </div>
        </div>
        
    </section>
    );
};

export default Register;