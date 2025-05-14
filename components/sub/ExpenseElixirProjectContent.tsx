"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const images = [
  "/projects/ExpenseElixir/ExpenseElixir.png",
  "/projects/ExpenseElixir/ExpenseElixirImage1.jpeg",
  "/projects/ExpenseElixir/ExpenseElixirImage2.jpeg",
  "/projects/ExpenseElixir/ExpenseElixirImage3.jpeg",
  "/projects/ExpenseElixir/ExpenseElixirImage4.jpeg",
  "/projects/ExpenseElixir/ExpenseElixirImage5.jpeg",
  "/projects/ExpenseElixir/ExpenseElixirImage6.jpeg",
  "/projects/ExpenseElixir/ExpenseElixirImage7.jpeg",
  "/projects/ExpenseElixir/ExpenseElixirImage8.jpeg",
];
const ExpenseElixirProjectContent = () => {
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
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 overflow-visible">
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Expense Elixir – Smart Budgeting App
        </span>
      </h1>
      <ul className="max-w-3xl text-left text-gray-300 text-lg mb-10 list-disc list-inside space-y-4">
        <li>
          Created a full-stack expense tracking app that helps users categorize,
          track, and analyze their daily spending habits.
        </li>
        <li>
          Built the frontend using React and Tailwind CSS with a clean,
          mobile-first design and responsive charts.
        </li>
        <li>
          Developed a Node.js + Express backend with JWT-based authentication,
          managing users and transactions securely.
        </li>
        <li>
          Used MongoDB to store user data, transaction history, and
          budget-related insights with high scalability.
        </li>
        <li>
          Integrated monthly summaries and pie/bar visualizations for expense
          breakdown using Chart.js.
        </li>
        <li>
          Learned modular API development, user session management, and secure
          full-stack integration with React.
        </li>
      </ul>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md mb-10">
        <a
          href="https://github.com/Varshan-Manish/ExpenseElixir"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/12mSvoZ7K1zFKgMABG8W1KbUEo07JVSjY/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg hover:opacity-90 transition font-medium"
        >
          Documentation
        </a>
      </div>
      <div className="w-full max-w-5xl mb-10">
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
                alt={`Expense Elixir Image ${index + 1}`}
                onClick={() => setFullscreenImage(src)}
                className="w-full h-64 object-cover rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-center items-center p-4 overflow-auto">
          <div className="relative flex justify-center items-center max-w-[90vw] max-h-[90vh]">
            <img
              src={fullscreenImage}
              alt="Fullscreen preview"
              className="w-auto h-auto max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            />
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
export default ExpenseElixirProjectContent;
