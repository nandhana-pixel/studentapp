import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Submission from './components/Submission'
import {Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
       <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/s" element={<Submission/>} />
       </Routes>
    </>
  )
}

export default App
