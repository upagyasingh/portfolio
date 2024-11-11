import React from 'react'
import {Navbar,Hero,About,Experience,Tech,Works,Feedbacks,Contact,StarsCanvas} from './components/index'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Background from './ui/Background'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* This will match "/" */}
          <Route path="about" element={<About />} />
          <Route path="work" element={<Works />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
