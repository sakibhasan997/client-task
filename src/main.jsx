import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import AddUser from './Pages/AddUser';
import Modal from './Modal/Modal';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/addUser',
    element: <AddUser />
  },
  {
    path: '/updateUser/:id',
    element: <Modal/>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1600px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
