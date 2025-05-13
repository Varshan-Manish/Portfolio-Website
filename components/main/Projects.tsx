"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ProjectCard from "../sub/ProjectCard";
import type { Swiper as SwiperType } from "swiper";

const Projects = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const projects = [
    {
      src: "/projects/ExpenseElixir/expenseElixir.png",
      title: "Expense Elixir",
      desc: "A modern expense tracking application with rich visualizations and intuitive UI for budgeting.",
      link: "/ExpenseElixirProject/",
    },
    {
      src: "/CardImage.png",
      title: "Interactive Website Cards",
      desc: "Dynamic and responsive website cards to showcase services or projects interactively.",
      link: "/404/",
    },
    {
      src: "/SpaceWebsite.png",
      title: "Space Themed Website",
      desc: "Immersive space-themed landing page designed with animations and parallax effects.",
      link: "/404/",
    },
    {
      src: "/NextWebsite.png",
      title: "Modern Next.js Portfolio",
      desc: "A sleek developer portfolio built with Next.js featuring server-side rendering and animations.",
      link: "/404/",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-4 md:px-8 z-[20]"
      id="projects"
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8">
        My Projects
      </h1>

      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="w-full max-w-[1200px]"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.desc}
                link={project.link}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
