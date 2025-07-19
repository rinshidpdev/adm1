import React from 'react'
import HeroPage from '../components/Hero/Hero'
import Cube from '../components/Cube/Cube'
import ServiceSection from '../components/ServiceSction/ServiceSection'
import ScrollCards from '../components/ScrollCards/ScrollCards'
import Clients from '../components/ClientsLogo/Clients'

const Home = () => {
  return (
    <>
    <HeroPage/>
    <Cube/>
    <ServiceSection/>
    <section style={{ width: '100%', overflow: 'hidden' }}>
  <ScrollCards />
</section>
    <Clients/>
    </>
  )
}

export default Home