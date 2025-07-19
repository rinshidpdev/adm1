import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Cube from './components/Cube/Cube'
import ServiceSection from './components/ServiceSction/ServiceSection'
import ScrollCards from './components/ScrollCards/ScrollCards'
import AboutSec from './components/AboutSec/AboutSec'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Branding from './components/Branding'
import WhyChooseBranding from './components/WhyChooseBranding/WhyChooseBranding'

const App = () => {
  return (
    <>
    <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<AboutUs/>}/>
   <Route path='/contact' element={<ContactUs/>}/>
   <Route path='/branding' element={<Branding/>}/>
   <Route path='/y' element={<WhyChooseBranding/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App