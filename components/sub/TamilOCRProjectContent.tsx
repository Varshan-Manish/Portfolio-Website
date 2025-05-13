"use client";

import { motion } from "framer-motion";

const TamilOCRProjectContent = () => {
  return (
    <motion.section
      className="relative z-[10] flex flex-col justify-center items-center px-6 pt-[10rem] pb-20 text-white text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 overflow-visible">
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Tamil Handwritten OCR using Deep Learning
        </span>
      </h1>

      <ul className="max-w-3xl text-left text-gray-300 text-lg mb-10 list-disc list-inside space-y-4">
        <li>
          Built a deep CNN-based Optical Character Recognition (OCR) model to
          classify 156 handwritten Tamil characters from vowels, consonants, and
          compounds.
        </li>
        <li>
          Used the IWFHR 2006 dataset and preprocessed all images with grayscale
          conversion, inversion, thickening, and centering on a 64×64 canvas.
        </li>
        <li>
          Designed a multi-layer CNN with batch normalization, ReLU activations,
          and dropout for robust feature extraction and classification.
        </li>
        <li>
          Achieved test accuracy of <strong>89.83%</strong>, with training and
          validation accuracies of 93.54% and 92.04% respectively.
        </li>
        <li>
          Evaluated performance using confusion matrix and class-wise accuracy
          to identify misclassifications, especially among compound characters.
        </li>
        <li>
          Implemented using PyTorch, Torchvision, PIL, NumPy, and trained on
          Google Colab with extensive visualizations of loss/accuracy trends.
        </li>
        <li>
          Proposed future improvements including attention-based models,
          multilingual OCR, and real-time deployment on mobile/edge devices.
        </li>
      </ul>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md">
        <a
          href="https://github.com/Varshan-Manish/NLP_J_COMPONENT_REPOSITORY"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/19C571MUlTupCjH-F6dy4PdvwcUV3Ja38/view?usp=sharing"
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

export default TamilOCRProjectContent;
