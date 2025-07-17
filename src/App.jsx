import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Cube from './components/Cube/Cube'
import ServiceSection from './components/ServiceSction/ServiceSection'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Cube/>
    <ServiceSection/>
    <Footer/>
    </>
  )
}

export default App