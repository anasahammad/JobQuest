

const NestJS = () => {
    return (
        <div className="max-w-4xl mx-auto my-6 p-6 overflow-hidden rounded-lg shadow ">
        <article>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">What is Nest.Js?</h2>
            <p className="mt-4 ">Introduction: Nest.js: Unveiling the Power of a Node.js Framework

In the world of server-side JavaScript development, Node.js has redefined how web applications are built. It’s known for its scalability, speed, and flexibility. But to harness the true potential of Node.js, you need a robust framework, and that’s where Nest.js comes into play.<a href="https://expressjs.com/">website</a>.</p>
            <div className="flex items-center mt-8 space-x-4">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocIHE_x1WXwqf6QXclnP92_gofzyaoyOGa0SvzLvAVs7iZmtRis=s96-c" alt="" className="w-10 h-10 rounded-full " />
                <div>
                    <h3 className="text-sm font-medium">Anas Ahammad Sarker</h3>
                    <time dateTime="2021-02-18" className="text-sm ">May 13th 2024</time>
                </div>
            </div>
            <hr className="my-6" />
    
            
            <div>
    
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">1. What is Nest.js?</h1>
                <h5 className="my-4 lg:text-xl ">Nest.js is a progressive Node.js framework that takes inspiration from both Angular and Spring. It provides a solid foundation for building scalable and maintainable server-side applications. Launched in 2017, Nest.js quickly gained popularity in the JavaScript community thanks to its powerful features and developer-friendly approach.</h5>
                
    
            </div>
            <div>
    
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">2. Why Nest.js?</h1>
                <h5 className="my-4 lg:text-xl ">Before diving into the details, let’s explore why you should consider Nest.js for your next project:</h5>

                <ol className="list-decimal space-y-4">
                    <li className="lg:text-xl"><span className="font-medium">Modularity:</span> Nest.js promotes a modular architecture, making it easy to organize and manage your codebase. It uses decorators and modules to create a structured application.</li>
                    <li className="lg:text-xl"><span className="font-medium">TypeScript:</span> Nest.js is built with TypeScript, a statically typed superset of JavaScript. This helps catch errors at compile time, resulting in more reliable code.</li>
                    <li className="lg:text-xl"><span className="font-medium">Dependency Injection:</span> It leverages the concept of dependency injection, allowing you to create reusable and testable components. This enhances code maintainability and testability.</li>
                    <li className="lg:text-xl"><span className="font-medium">Express Compatibility:</span> Nest.js is built on top of Express.js, one of the most popular Node.js web frameworks. This means you can seamlessly integrate existing Express middleware and libraries.</li>
                    <li className="lg:text-xl"><span className="font-medium">Scalability:</span> Nest.js is designed with scalability in mind. It supports microservices architecture, making it suitable for large and complex applications.</li>
                </ol>
                
    
            </div>
            <div>
    
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">2. Getting Started with Nest.js</h1>
                <h5 className="my-4 lg:text-xl ">To start using Nest.js, you’ll need Node.js and npm (Node Package Manager) installed on your system. You can create a new Nest.js project using the Nest CLI (Command Line Interface). Here’s a simple command to get you started:.</h5>

              
                <div>
                    <pre className="my-4  bg-[#211E2F] text-white overflow-auto p-4">
                    <code>
                    npm i -g @nestjs/cli <br />
                    nest new project-name

                    </code>
                    </pre>
                   
                </div>
                <h5 className="lg:text-xl">Once your project is set up, you can create modules, controllers, and providers to build your application’s functionality.</h5>
            </div>
    
            
           
        </article>
    </div>
    );
};

export default NestJS;