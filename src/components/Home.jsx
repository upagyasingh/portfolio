import React from 'react'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Tech from './Tech'
import Works from './Works'
import Contact from './Contact'

function Home() {
  return (
    <>
     <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero/>
     </div>
     <div className='relative z-0'>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      {/* <Feedbacks/> */}
          <Contact />
          
        </div>
    </>
  )
}

export default Home
