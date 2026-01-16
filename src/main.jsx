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
    path: '/',
    element: <App />,      
    children: [
      { index: true, element: <User /> },  // "/" יציג User
      {
        path: 'admin',
        element: <Admin />,
        children: [
          { path: 'services', element: <Services /> },
          { path: 'meetings', element: <Meetings /> }
        ]
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
