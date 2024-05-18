import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <section className='bg-gray-200 h-fit'>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </section>
  )
}

export default App
