import React from 'react'
import Features from './comonents/Features'
import Services from './comonents/Services'
import Footer from './comonents/Footer'
import Head from './comonents/Head'
import Previous from './comonents/Previous'
import Hero from './comonents/Hero'

const Page = () => {
  return (
    <div >
      <Head />
      <Hero />
      <Features />
      <Previous />
      <Services />
      <Footer />
    </div>
  )
}

export default Page