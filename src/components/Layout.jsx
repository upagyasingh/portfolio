import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>  
   <div className='relative z-0 bg-primary'>
   <Navbar/>
   <Outlet/>
   </div>
    </>
  )
}

export default Layout
