import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from './components/Header'
import Services from './pages/Services'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/' element={<Home />} />  
      </Routes>
    </div>
  )
}

export default App