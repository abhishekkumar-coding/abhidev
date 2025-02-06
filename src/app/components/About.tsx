import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'

function About() {
  return (
    <div id='about' className='w-full py-10 md:max-w-6xl mx-auto md:py-20 flex flex-col justify-center items-center gap-4'>
      <h1 className="bg-[#1E40AF] w-56 text-3xl font-semibold text-white text-center py-3 mx-auto mb-20 mt-10 transform rotate-12">
        About Me
      </h1>
      <h1 className='text-4xl md:text-5xl md:px-20 text-center tracking-wider leading-tight font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#1E40AF] to-[#D1D5DB]'>Crafting Web Application with Passion and Precision
      </h1>
      <p className='text-[#D1D5DB] text-center '>“I am a passionate Full-Stack Web Developer and a BCA student at IIMT College, Aligarh, set to graduate in 2025. Proficient in modern technologies like React, Node.js, Express, and MongoDB, I excel in building responsive websites and scalable applications. My strong foundation in JavaScript and web design enables me to create seamless user experiences and innovative solutions. Dedicated to continuous learning, I stay updated with industry trends to deliver future-ready projects that drive success for businesses and users.”</p>
      <ul className=''>
        <li className='flex my-5 items-center gap-4 text-white tracking-wider text-2xl font-semibold'>
          <div className='w-7 h-7 bg-[#1E40AF] text-center text-xl font-extrabold'>
            <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff", }} />
          </div> Frontend Development
        </li>
        <li className='flex my-5 items-center gap-4 text-white tracking-wider text-2xl font-semibold'>
          <div className='w-7 h-7 bg-orange-600 text-center text-xl font-extrabold'>
            <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff", }} />
          </div> Backend Development
        </li>
        <li className='flex  items-center gap-4 text-white tracking-wider text-2xl font-semibold'>
          <div className='w-7 h-7 bg-green-700 text-center text-xl font-extrabold'>
            <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff", }} />
          </div> Fullstack Development
        </li>
      </ul>
    </div>
  )
}

export default About