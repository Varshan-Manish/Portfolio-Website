"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-10 relative bg-black"
    >
      {/* Heading */}
      <motion.h1
        variants={slideInFromLeft(0.3)}
        initial="hidden"
        animate="visible"
        className="text-[40px] font-bold text-center text-gray-200 mb-10 z-[25]"
      >
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-400">
          Me
        </span>
      </motion.h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 z-[25] relative">
        {/* Profile Image with fly-in and interactive tilt */}
        <motion.div
          initial={{ x: -500, opacity: 0 }} // Start position: off-screen to the left
          animate={{ x: 0, opacity: 1 }} // End position: on-screen
          transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
          className="z-[25]"
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={400}
            className="w-[358px] h-[550px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-gray-900"
          >
            <Image
              src="/varshan.jpeg"
              alt="Varshan Manish"
              fill
              className="object-cover w-full h-full rounded-2xl"
            />
          </Tilt>
        </motion.div>

        {/* Text + Button */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 text-gray-300 max-w-xl text-center md:text-left relative z-[25]"
        >
          <h2 className="text-3xl font-bold text-white">Varshan Manish</h2>
          <p className="text-lg italic text-gray-400">
            M.Tech (Integrated) in Computer Science Engineering, VIT
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I am a 3rd year student at Vellore Institute of Technology, Vellore
            (VIT University). I have been working tirelessly to upskill myself
            in the said domains. I am also learning more and more about the
            world of artificial intelligence, machine learning, and deep
            learning. I am currently looking for internships revolving around my
            domain of expertise.
          </p>
          <Link
            href="https://drive.google.com/file/d/1JsgSIvq4txbu3yy-SSu55qRMe65bP_PA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 z-[30]"
          >
            Download Resume
          </Link>
          {/* Link to the /ComingSoon route */}
          <Link
            href="/ComingSoon"
            className="inline-block mt-6 bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 z-[30]"
          >
            Learn More about me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
