import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import Recipe from './Recipe'
import Searched from './Searched'

function Pages() {
  return (
    <AnimatePresence>
  <Routes>        
        {/* <Home/> */}
        <Route path='/' element={<Home/>}  />
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
        <Route path='/searched/:search' element={<Searched/>} />
        <Route path='/recipe/:name' element={<Recipe/>}  />
    </Routes>
    </AnimatePresence>
    
  )
}

export default Pages