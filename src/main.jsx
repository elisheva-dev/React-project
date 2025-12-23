import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Admin from './admin/Admin.jsx'
import Meetings from './meetings/Meetings.jsx'
import Services from './services/Services.jsx'
import './index.css'
import User from './user/User.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <User />

  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error contants</div>,
    children: [
      {
        path: 'services',
        element: <Services/>,
        errorElement: <div>error contant not found</div>
      },
      {
        path: 'meetings',
        element:<Meetings/>,
        errorElement: <div>error contant not found</div>
      }
    ]
  },
  

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
