import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Blogs from './pages/Blogs'

import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Skills from './pages/Skills'

const AppRouter = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/Home" element={<Navbar />}/> */}
        
            
        
      </Routes>
    </div>
  )
}

export default AppRouter
