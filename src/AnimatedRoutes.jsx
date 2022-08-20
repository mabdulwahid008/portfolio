import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './components/about/About'
import Home from './components/home/Home'
import { AnimatePresence } from 'framer-motion'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}> 
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes