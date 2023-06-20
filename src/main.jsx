import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import AddUser from './Pages/AddUser';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/addUser',
    element: <AddUser />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1600px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
