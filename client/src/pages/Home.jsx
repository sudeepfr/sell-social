import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import LatestListing from '../components/LatestListing'
import Plans from '../components/Plans'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <Hero/>
    <LatestListing/>
    <Plans/>
    <CTA/>
    <Footer/>
    </div>
  )
}

export default Home
