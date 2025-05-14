"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/projects/Covid19Manager/Covid19Manager.JPG",
  "/projects/Covid19Manager/Covid19Manager1.png",
  "/projects/Covid19Manager/Covid19Manager2.png",
  "/projects/Covid19Manager/Covid19Manager3.png",
  "/projects/Covid19Manager/Covid19Manager4.png",
  "/projects/Covid19Manager/Covid19Manager5.png",
  "/projects/Covid19Manager/Covid19Manager6.png",
  "/projects/Covid19Manager/Covid19Manager7.png",
  "/projects/Covid19Manager/Covid19Manager8.png",
];

const Covid19ManagerProjectContent = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    if (fullscreenImage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [fullscreenImage]);

  return (
    <motion.section
      className="relative z-[10] flex flex-col justify-center items-center px-6 pt-[10rem] pb-20 text-white text-center animate-floating"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 overflow-visible">
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Covid-19 Manager And Tracker API - With Google App Engine
        </span>
      </h1>

      <ul className="max-w-3xl text-left text-gray-300 text-lg mb-10 list-disc list-inside space-y-4">
        <li>
          Built a RESTful API in Node.js to track Covid-19 cases, testing
          centers, hospitals, and zones.
        </li>
        <li>
          Implemented secure CRUD operations with Express and PostgreSQL for
          district and state-level data.
        </li>
        <li>
          Added JWT-based authentication to ensure safe access for admin users.
        </li>
        <li>
          Enabled dynamic zone status updates based on active case thresholds.
        </li>
        <li>
          Wrote modular code with middleware for validation, sanitization, and
          error handling.
        </li>
        <li>
          Learned API structuring, REST principles, and real-world backend
          implementation under constraints.
        </li>
      </ul>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md mb-10">
        <a
          href="https://github.com/Varshan-Manish/Covid-19-Tracker-And-Management"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1VWrzdsY2CRevi-BG8MANevAIIVLsVY38/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg hover:opacity-90 transition font-medium"
        >
          Documentation
        </a>
      </div>

      {/* Swiper */}
      <div className="w-full max-w-5xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Covid Image ${index + 1}`}
                onClick={() => setFullscreenImage(src)}
                className="w-full h-64 object-cover rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fullscreen Modal */}
      {/* Fullscreen Modal */}
      {/* Fullscreen Modal */}
      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-center items-center p-4 overflow-auto">
          <div className="relative flex justify-center items-center max-w-[90vw] max-h-[90vh]">
            <img
              src={fullscreenImage}
              alt="Fullscreen preview"
              className="w-auto h-auto max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            />
            {/* Close button placed outside image, within modal */}
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-12 -right-6 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-105 transition"
              aria-label="Close fullscreen"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Swiper arrow styles */}
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
        }

        .swiper-button-prev {
          left: -20px;
        }

        .swiper-button-next {
          right: -20px;
        }

        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            width: 30px;
            height: 30px;
          }

          .swiper-button-prev {
            left: -10px;
          }

          .swiper-button-next {
            right: -10px;
          }
        }
      `}</style>

      {/* Floating animation */}
      <style jsx global>{`
        @keyframes floatY {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-floating {
          animation: floatY 6s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default Covid19ManagerProjectContent;
