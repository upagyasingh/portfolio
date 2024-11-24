import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <>  
   <div className='relative z-0 bg-primary'>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </div>
    </>
  )
}

export default Layout
