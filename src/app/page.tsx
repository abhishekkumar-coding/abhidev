"use client"
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SideBar from './components/SideBar'


function Page() {

  const [open, setOpen] = useState(false);
  const toggle = ()=>setOpen(!open)
  return (
    <>
    <Navbar toggle={toggle}/>
    <SideBar toggle={toggle} sideState={open}/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Services/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Page