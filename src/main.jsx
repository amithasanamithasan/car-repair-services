import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routers/Routers.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
 <div className="mx-10 ">
   <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
 </div>
)
