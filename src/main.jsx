import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddItem from './Components/AddItem/AddItem.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    children : [
      {
        path :'/addItem',
        element : <AddItem></AddItem>
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
