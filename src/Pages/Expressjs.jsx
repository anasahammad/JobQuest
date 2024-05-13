

const Expressjs = () => {
    return (
        <div className="max-w-4xl mx-auto my-6 p-6 overflow-hidden rounded-lg shadow dark:bg-gray-50 dark:text-gray-800">
        <article>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">What is Express.js?</h2>
            <p className="mt-4 dark:text-gray-600">Learn about the popular web framework Express.js.
Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks. To learn more about Express and what it can do, visit the official <a href="https://expressjs.com/">website</a>.</p>
            <div className="flex items-center mt-8 space-x-4">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocIHE_x1WXwqf6QXclnP92_gofzyaoyOGa0SvzLvAVs7iZmtRis=s96-c" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                <div>
                    <h3 className="text-sm font-medium">Anas Ahammad Sarker</h3>
                    <time dateTime="2021-02-18" className="text-sm dark:text-gray-600">May 13th 2024</time>
                </div>
            </div>
            <hr className="my-6" />
    
            
            <div>
    
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">1. HANDLING REQUESTS</h1>
                <h5 className="my-4 lg:text-xl ">In traditional web applications, a web server will wait for HTTP requests to be sent from the client. Upon receiving a HTTP request, the server will choose the corresponding route handler and delegate further action to it for that request. Normally, writing a route handler from scratch can be a bit burdensome in Node. Fortunately, Express provides methods to specify what function is called for a particular HTTP verb (GET, POST, PUT, etc.) and URL pattern (Route). An example of a Express route is demonstrated in the code snippet below. Here, Express is declaring that all GET requests made to the route, /, will be handled with a function that responds to the client with “Hello World!”</h5>
                <div>
                    <pre className="my-4  bg-[#211E2F] text-white overflow-auto p-4">
                    <code>
                    const express = require('express'); <br />
const app = express(); <br />
const port = 3000; <br />
app.get('/', (req, res) => res.send('Hello World!')); <br />
app.listen(port, () => console.log('Example app listening at http://localhost:$(port)'));
                    </code>
                    </pre>
                   
                </div>
    
            </div>
            <div>
    
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">2. MIDDLEWARE</h1>
                <h5 className="my-4 lg:text-xl ">Express is an un-opinionated framework, meaning that it allows developers the freedom to structure their code how they choose instead of forcing a particular code structure. One place where this un-opinionated stance can be seen is with the application of middleware. Middleware allows for operations to be performed on requests and responses moving through the routes and is extensively used in Express apps. Middleware can be applied at both the application and route levels as well as be chained together. You can insert almost any compatible middleware you like into the request handling chain, in almost any order you like.</h5>

                <h5 className="my-4 lg:text-xl ">A typical Express route will usually consist of some middleware and a route handler function. The following example shows an Express router that applies middleware to every HTTP GET request made to the /user/:id route. The request and response pass through the middleware and ultimately arrive at the route handler function, which ends the HTTP request-response cycle by returning “hello, user!” to the HTTP client.</h5>
                <div>
                    <pre className="my-4  bg-[#211E2F] text-white overflow-auto p-4">
                    <code>
                    const  express = require('express'); <br />
                    const app = express(); <br />
                    var router = express.Router();
                    {`router.use(function (req, res, next) {\n`}
      {`  if (!req.headers['x-auth']) return next('router');\n`}
      {`  next();\n`}
      {'});\n\n'}
      {`router.get('/user/:id', function (req, res) {\n`}
      {`  res.send('hello, user!');\n`}
      {'});\n'}

                    </code>
                    </pre>
                   
                </div>
    
            </div>
    
            
           
        </article>
    </div>
    );
};

export default Expressjs;