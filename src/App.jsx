import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <div>

      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </section>
  )
}

export default App
