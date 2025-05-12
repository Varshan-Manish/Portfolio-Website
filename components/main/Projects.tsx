"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const projects = [
    {
      src: "/projects/expenseElixir.png",
      title: "Expense Elixir",
      desc: "A modern expense tracking application with rich visualizations and intuitive UI for budgeting.",
    },
    {
      src: "/CardImage.png",
      title: "Interactive Website Cards",
      desc: "Dynamic and responsive website cards to showcase services or projects interactively.",
    },
    {
      src: "/SpaceWebsite.png",
      title: "Space Themed Website",
      desc: "Immersive space-themed landing page designed with animations and parallax effects.",
    },
    {
      src: "/NextWebsite.png",
      title: "Modern Next.js Portfolio",
      desc: "A sleek developer portfolio built with Next.js featuring server-side rendering and animations.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-4 md:px-8 z-[25]"
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
              className="w-full h-full"
              onMouseEnter={(e) => {
                const swiperEl = e.currentTarget.closest(".swiper").swiper;
                swiperEl.autoplay.stop();
              }}
              onMouseLeave={(e) => {
                const swiperEl = e.currentTarget.closest(".swiper").swiper;
                swiperEl.autoplay.start();
              }}
            >
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.desc}
                link="/ComingSoon"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
