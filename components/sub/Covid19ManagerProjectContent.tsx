"use client";

import { motion } from "framer-motion";

const Covid19ManagerProjectContent = () => {
  return (
    <motion.section
      className="relative z-[10] flex flex-col justify-center items-center px-6 pt-[10rem] pb-20 text-white text-center"
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

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md">
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
    </motion.section>
  );
};

export default Covid19ManagerProjectContent;
