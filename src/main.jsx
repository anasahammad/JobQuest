import * as React from "react"; 
import * as ReactDOM from "react-dom/client";
import {
 RouterProvider, 
} from "react-router-dom"; 
import "./index.css"; 
import router from "./Routes/Router";
import AuthProvider from "./Provider/AuthProvider";
import {
   QueryClient,
   QueryClientProvider,
 } from '@tanstack/react-query'
 

 const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} /> 
    </AuthProvider>
    </QueryClientProvider>
  

 </React.StrictMode> 
); 
