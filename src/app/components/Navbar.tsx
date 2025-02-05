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
        <div className='w-full sticky top-0 z-50 bg-[#26093d]'>
            <div className='mx-auto max-w-6xl py-3 flex justify-between items-center'>
                <h1 className='text-white text-4xl font-semibold py-2'>AbhiDev</h1>
               <div className='flex items-center gap-3' > 
                <div className='flex items-center justify-center'>
                    <ul className='hidden md:flex space-x-10 text-xl items-center text-white'>
                        <li className='customBorder cursor-pointer'>Home </li>
                        <li className='customBorder cursor-pointer'>About </li>
                        <li className='customBorder cursor-pointer'>Services </li>
                        <li className='customBorder cursor-pointer'>Projects </li>
                    </ul>
                    <button className='py-2 px-3 md:ml-10 bg-white hover:bg-gray-200 transition-all duration-200 text-[#1E40AF] font-semibold text-xl rounded-lg'>Hire Me</button>
                </div>
                <button onClick={toggle} className='text-4xl md:hidden'><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></button>
            </div>
            </div>
        </div>
    )
}

export default Navbar