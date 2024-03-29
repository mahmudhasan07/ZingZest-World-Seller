import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddItem from './Components/AddItem/AddItem.jsx'
import Home from './Components/Home/Home.jsx'
import Registration from './Components/User/Registration.jsx'
import ContextAPI from './Components/ContextAPI/ContextAPI.jsx'
import PrivateRoute from './Components/PrivetRoute/PrivateRoute.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Items from './Components/Items/Items.jsx'
import ItemsInfo from './Components/Items/ItemsInfo.jsx'

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: '/addItems',
        element: <AddItem></AddItem>
      },
      {
        path: "/allItems",
        element : <Items></Items>
      },
      {
        path: "/allItems/:id",
        element : <ItemsInfo></ItemsInfo>
      },
      {
        path: "/logIn",
        element: <Registration></Registration>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAPI>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <App />

        </RouterProvider>
      </QueryClientProvider>
    </ContextAPI>
  </React.StrictMode>,
)
