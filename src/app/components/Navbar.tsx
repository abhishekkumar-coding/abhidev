"use client"
import React from 'react'
import "../globals.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface IPROPS{
    toggle :  () => void,
}

const Navbar : React.FC<IPROPS> = ({toggle}) =>{
    return (
        <div className='w-full px-2 md:px-0 sticky top-0 z-50 bg-[#26093d]'>
            <div className='mx-auto max-w-6xl py-3 flex justify-between items-center'>
                <h1 className='text-white text-4xl font-semibold py-2 cursor-pointer'><a href="#home">AbhiDev</a></h1>
               <div className='flex items-center gap-3' > 
                <div className='flex items-center justify-center'>
                    <ul className='hidden md:flex space-x-10 text-xl items-center text-white'>
                        <li className='customBorder cursor-pointer'><a href="#home">Home</a> </li>
                        <li className='customBorder cursor-pointer'><a href="#skills">Skills </a></li>
                        <li className='customBorder cursor-pointer'><a href="#project">Projects</a> </li>
                        <li className='customBorder cursor-pointer'><a href="#service">Services</a> </li>
                        <li className='customBorder cursor-pointer'><a href="#about">About </a></li>
                    </ul>
                    <button className='py-2 px-3 md:ml-10 bg-white hover:bg-gray-200 transition-all duration-200 text-[#1E40AF] font-semibold text-xl rounded-lg'><a href="#contact">Hire Me</a></button>
                </div>
                <button onClick={toggle} className='text-4xl md:hidden'><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></button>
            </div>
            </div>
        </div>
    )
}

export default Navbar