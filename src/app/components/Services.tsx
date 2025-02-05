import Image from 'next/image'
import React from 'react'


interface Service {
    img: string;
    h1: string;
    text: string;
}

function Services() {
    const data: Service[] = [
        {
            img: "/images/s1.png",
            h1: "Web Applications",
            text: "Tailored web apps built with the latest technologies."
        },
        {
            img: "/images/s2.png",
            h1: "E-commerce Websites",
            text: "Secure online stores with user-friendly shopping and payments."
        },
        {
            img: "/images/s3.png",
            h1: "API Integration",
            text: "Seamless integration for smooth data sharing and functionality."
        },
        {
            img: "/images/s4.png",
            h1: "User Interfaces",
            text: "Engaging, responsive front-end designs for better user experiences"
        },
        {
            img: "/images/s5.png",
            h1: "Database Solutions",
            text: "Efficient and scalable database management for your data needs."
        },
        {
            img: "/images/s6.png",
            h1: "Real-Time Features",
            text: "Add live chat, notifications, and real-time data updates."
        },
        {
            img: "/images/s7.png",
            h1: "Speed Optimization",
            text: "Boost performance with faster load times and optimization."
        },
        {
            img: "/images/s8.png",
            h1: "Website Management",
            text: "Easy content management systems with flexible controls."
        },
    ];
    return (
        <div className="w-full bg-black py-10">
            <h1 className='bg-[#1E40AF] w-44 text-3xl font-semibold text-white text-center py-3 mx-auto mb-20 mt-10 transform -rotate-12'>Services</h1>
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center px-8 md:px-0 md:grid grid-cols-4 gap-6">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-start justify-between w-full sm:max-w-64 h-80 text-white p-4 hover:bg-[#1E40AF] transition-all duration-250 rounded-lg shadow-lg bg-gray-900">
                        <div className="w-16 h-16">
                            <Image src={item.img} alt={item.h1} layout='responsive' width={1} height={1} />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <h1 className="text-xl font-bold">{item.h1}</h1>
                            <p className="text-lg bg-opacity-35 py-4">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services