import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddItem from './Components/AddItem/AddItem.jsx'
import Home from './Components/Home/Home.jsx'
import Registration from './Components/User/Registration.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addItems',
        element: <AddItem></AddItem>
      },
      {
        path : "/logIn",
        element : <Registration></Registration>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />

    </RouterProvider>
  </React.StrictMode>,
)
