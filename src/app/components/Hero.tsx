import React from 'react'
import { FaDownload } from "react-icons/fa";


function Hero() {
  return (
    <div id='home' className='w-full'>
      <div className='max-w-6xl py-40 md:py-0 flex flex-col justify-center items-center gap-4 mx-auto md:h-screen'>
        <h1 className='text-3xl md:text-5xl text-[#D1D5DB] tracking-wider font-extrabold text-left max-w-full'>I am Abhishek</h1>
        <h1 className='text-[7vw] md:text-[80px] font-semibold bg-gradient-to-r text-transparent bg-clip-text from-[#1E40AF] to-[#D1D5DB]'>Full Stack Web Developer</h1>
        <p className='text-lg md:text-xl text-center tracking-wider text-[#D1D5DB] max-w-3xl '>I&#39;m a Full-Stack Developer with a passion for creating dynamic and responsive web applications. I enjoy working on both front-end and back-end technologies to deliver user-friendly and efficient solutions</p>
        <a href="/Abhishek_Resume.pdf" download="Abhishek Reume" className='' target='_blank'><button className='py-2 px-3 transition-all duration-200 bg-[#1E40AF] mt-10 font-semibold border text-xl rounded-lg flex justify-center items-center gap-2 outline-none border-none hover:bg-[#1E3A8A] text-white'>Download CV <FaDownload />
        </button></a>
      </div>
    </div>
  )
}

export default Hero