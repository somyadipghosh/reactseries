import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from './components/Header'
import Services from './pages/Services'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'

const App = () => {

  const data=useContext(DataContext);

  return (
    <div>
      <Header />
      <Section />
      <h1>Hello, this is {data.username}</h1>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/' element={<Home />} />  
      </Routes>
      <Footer />
    </div>
  )
}

export default App