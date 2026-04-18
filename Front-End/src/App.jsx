import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from './Components/Home'
import Registration from './Components/Registration'
import Error from './Pages/Error'
import About from './Components/About'
import Login from './Components/Login'
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className=' w-[94%] mx-auto p-2'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
