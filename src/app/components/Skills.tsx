"use client";
import Image from 'next/image';
import React from 'react';

// Defining the type for the data items
interface Skill {
    img: string;
    h1: string;
    percentage: string;
}

function Skills() {
    // Applying the type annotation to the data array
    const data: Skill[] = [
        {
            img: "/images/html.svg",
            h1: "Html",
            percentage: "90%"
        },
        {
            img: "/images/js.svg",
            h1: "JavaScript",
            percentage: "85%"
        },
        {
            img: "/images/ts.svg",
            h1: "TypeScript",
            percentage: "85%"
        },
        {
            img: "/images/react.svg",
            h1: "React",
            percentage: "85%"
        },
        {
            img: "/images/node.svg",
            h1: "Node.js",
            percentage: "85%"
        },
        {
            img: "/images/mongo.svg",
            h1: "Mongo DB",
            percentage: "85%"
        },
        {
            img: "/images/python.svg",
            h1: "Python",
            percentage: "85%"
        },
        {
            img: "/images/nextjs.svg",
            h1: "Next.js",
            percentage: "85%"
        },
    ];

    return (
        <div id='skills' className="w-full bg-black py-4 md:py-10">
            <h1 className='bg-[#1E40AF] w-44 text-3xl font-semibold text-white text-center py-3 mx-auto mb-20 mt-10 transform -rotate-12'>My Skills</h1>
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center max-sm:px-5 sm:px-0 gap-10">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center max-sm:w-full sm:max-w-64 text-white p-4 hover:bg-[#1E40AF] transition-all duration-250 rounded-lg shadow-lg bg-gray-900">
                        <div className="w-16 h-16 mb-4">
                        <Image src={item.img} alt={item.h1} layout='responsive' width={1} height={1}  />
                        </div>
                        <h1 className="text-2xl font-bold">{item.h1}</h1>
                        <p className="text-lg bg-black bg-opacity-35 py-1 px-14 rounded-md mt-7">{item.percentage}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
