"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Dialog } from "@headlessui/react";

const ProjectsContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  const projectImages = [
    "/projects/ExpenseElixir/ExpenseElixirImage1.jpeg",
    "/projects/ExpenseElixir/ExpenseElixirImage2.jpeg",
    "/projects/ExpenseElixir/ExpenseElixirImage3.jpeg",
    "/projects/ExpenseElixir/ExpenseElixirImage4.jpeg",
    "/projects/ExpenseElixir/ExpenseElixirImage5.jpeg",
    "/projects/ExpenseElixir/ExpenseElixirImage6.jpeg",
    "/projects/ExpenseElixir/ExpenseElixirImage7.jpeg",
    "/projects/ExpenseElixir/ExpenseElixirImage8.jpeg",
  ];

  return (
    <motion.section
      className="relative z-[20] flex flex-col justify-center items-center min-h-screen px-6 pt-[14rem] pb-20 text-white"
      animate={{ y: [0, -15, 0, 15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-12"
      >
        Expense Elixir – Mobile Expense Tracker App
      </motion.h1>

      <ul className="max-w-3xl text-left text-gray-300 text-lg mb-10 list-disc list-inside space-y-3">
        <li>
          Developed a cross-platform mobile app using Flutter to track daily
          expenses, categorize transactions and visualize spending trends with
          dynamic pie charts.
        </li>
        <li>
          Integrated SQLite for efficient offline data storage and management;
          implemented CRUD operations for expense records with intuitive forms
          and filters.
        </li>
        <li>
          Utilized Syncfusion Flutter Charts to build visualizations for the
          tracked expenses and trends.
        </li>
        <li>
          Allows users to categorize their spending and gain insights on various
          financial behaviors.
        </li>
      </ul>

      <div className="flex gap-6 mb-12">
        <a
          href="https://github.com/Varshan-Manish/ExpenseElixir"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/12mSvoZ7K1zFKgMABG8W1KbUEo07JVSjY/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          Documentation
        </a>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full max-w-4xl"
      >
        {projectImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="cursor-pointer relative w-full h-[400px] bg-black rounded-xl overflow-hidden group"
              onClick={() => openModal(src)}
            >
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Dialog open={isOpen} onClose={closeModal} className="relative z-[100]">
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-6xl w-full bg-transparent">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-xl rounded-full leading-none"
            >
              &times;
            </button>
            {selectedImage && (
              <div className="relative w-full max-h-[90vh] overflow-auto flex justify-center items-center">
                <Image
                  src={selectedImage}
                  alt="Enlarged project"
                  width={1200}
                  height={800}
                  className="rounded-lg object-contain w-auto h-auto max-w-full max-h-[90vh]"
                />
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </motion.section>
  );
};

export default ProjectsContent;
