"use client";
import Image from "next/image";
import React from "react";

// Correct interface
interface Project {
  img: string;
}

function Projects() {
  // Correct array type
  const data: Project[] = [
    { img: "/images/rotw.png" },
    { img: "/images/travovertex.png"},
    { img: "/images/adventure.png"},
  ];

  return (
    <div className="w-full py-10 overflow-hidden">
      <h1 className="bg-[#1E40AF] w-56 text-3xl font-semibold text-white text-center py-3 mx-auto mb-20 mt-10 transform -rotate-12">
        My Projects
      </h1>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center max-w-64 text-white rounded-lg shadow-lg"
          >
            <div className="w-[50vw] h-[40vw] mb-4 relative">
              <Image
                src={item.img}
                alt={item.img}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
