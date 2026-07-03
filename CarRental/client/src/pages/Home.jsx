import React from 'react'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonial'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testimonial />
      <Newsletter />
    </>
  )
}

export default Home