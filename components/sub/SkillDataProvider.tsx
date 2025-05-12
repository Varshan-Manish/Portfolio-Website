// SkillDataProvider.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  label: string;
}

const SkillDataProvider = ({ src, width, height, index, label }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      transition={{
        delay: index * animationDelay,
        type: "spring",
        stiffness: 100,
      }}
      className="flex flex-col items-center mx-4 my-4 select-text"
    >
      {/* Hover effect applied only to the image */}
      <motion.div
        whileHover={{
          scale: 1.2, // Slightly scale up the image
          y: -5, // Raise the image on hover
          boxShadow: "0 4px 25px rgba(255, 0, 255, 0.6)", // Glow effect on hover
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cursor-pointer inline-block" // Removed any background styling here
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={`${label} icon`}
          className="object-contain pointer-events-auto" // The image itself is unaffected by layout shifts
        />
      </motion.div>

      {/* Label text */}
      <span className="mt-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center">
        {label}
      </span>
    </motion.div>
  );
};

export default SkillDataProvider;
