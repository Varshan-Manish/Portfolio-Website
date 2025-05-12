"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string; // Added the link prop
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative rounded-lg shadow-lg border border-[#2A0E61] transition-all">
      {/* Image container with a 16:9 aspect ratio */}
      <div className="relative w-full pb-[56.25%]">
        {/* 16:9 aspect ratio */}
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover" // Ensures the image covers the container while maintaining its aspect ratio
          className="absolute inset-0 transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      <div className="relative p-4 flex flex-col justify-between h-full">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>

        {/* Centered button */}
        <div className="mt-auto flex justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
