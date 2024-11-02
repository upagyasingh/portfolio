import React from 'react'
import {Navbar,Hero,About,Experience,Tech,Works,Feedbacks,Contact,StarsCanvas} from './components/index'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar/>
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
    </div>
    </BrowserRouter>
  )
}

export default App
