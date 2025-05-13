"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative rounded-lg shadow-lg border border-[#2A0E61] transition-all overflow-hidden">
      {/* Image with 16:9 aspect ratio */}
      <div className="relative w-full pb-[56.25%]">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>

        <div className="flex justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full sm:w-auto text-center"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
