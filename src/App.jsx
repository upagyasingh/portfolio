import React from 'react'
import {Navbar,Hero,About,Experience,Tech,Works,Feedbacks,Contact,StarsCanvas} from './components/index'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import WorkPage from './components/WorkPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
