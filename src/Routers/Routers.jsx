import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";

import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import Privetroutes from "./Privetroutes/Privetroutes";




const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>,
        },
        {
          path:'login',
          element:<Login></Login>,
        },
        {
          path:'signup',
          element:<Signup></Signup>,
        },
        {
          path:'book/:id',
          element:<Privetroutes><BookService></BookService></Privetroutes>,
          loader:({params}) =>fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path:'bookings',
          element:<Privetroutes><Bookings></Bookings></Privetroutes>
      
        }
    ]
    },
  ]);

export default router;