"use client"
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface IPROPS{
    toggle :  () => void,
    sideState : boolean
}


const SideBar: React.FC<IPROPS> = ({toggle, sideState}) => {
    return (
        <div className={`w-[80%] h-screen md:hidden absolute transition-all duration-200 top-0 ${sideState ? "left-0" : "-left-96"
            } z-50 p-4 rounded bg-[#050709] bg-opacity-95 flex justify-between items-start`}
        >
            <ul className='flex flex-col space-y-5 text-3xl items-start text-white'>
                <li className='customBorder cursor-pointer transition-all duration-100 hover:text-gray-400'><a href="#home">Home</a></li>
                <li className='customBorder cursor-pointer transition-all duration-100 hover:text-gray-400'><a href="#skills">Skills </a></li>
                <li className='customBorder cursor-pointer transition-all duration-100 hover:text-gray-400'><a href="#project">Projects</a></li>
                <li className='customBorder cursor-pointer transition-all duration-100 hover:text-gray-400'><a href="#service">Services</a> </li>
                <li className='customBorder cursor-pointer transition-all duration-100 hover:text-gray-400'><a href="#about">About </a></li>
            </ul>
            <button onClick={toggle} className='text-4xl text-white hover:text-gray-400'><FontAwesomeIcon icon={faXmark} /></button>
        </div>

        )
}

        export default SideBar