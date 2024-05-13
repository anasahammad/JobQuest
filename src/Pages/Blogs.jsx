import { Link } from "react-router-dom";
import expressjs from "../assets/images/download.jfif"

const Blogs = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">recent blogs </h1>

            <button className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700"/>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://img.freepik.com/free-vector/flat-design-data-driven-illustration_23-2149479220.jpg?t=st=1715583211~exp=1715586811~hmac=387c43bc59d4ef0f43056f899bdfb4439004ea8f009454be50279dafee1dfec4&w=360" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Server</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    What is an access token and refresh token?
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    A careful balance between security and user experience is essential for authentication and authorization. 
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Anas Ahammad
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">May 13, 2024</p>
                        </div>

                        <Link to='/token' className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={expressjs} alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Express Js</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    What is express js?</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Express.js is the most popular web framework for Node.js. It is designed for building web applications and
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                Anas Ahammad
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">April 18, 2024</p>
                        </div>

                        <Link to="/express" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Nest js</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    What is Nest JS?
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                    In the world of server-side JavaScript development, Node.js has redefined how web applications are built. It’s known for its scalability, 
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                             Anas Ahammad
                            </a>

                            <p className="text-sm text-gray-500 dark:text-gray-400">May 5, 2024</p>
                        </div>

                        <Link to='/nest-js' className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default Blogs;