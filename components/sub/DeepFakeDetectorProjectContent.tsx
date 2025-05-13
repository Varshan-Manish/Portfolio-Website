"use client";

import { motion } from "framer-motion";

const DeepfakeDetectionProjectContent = () => {
  return (
    <motion.section
      className="relative z-[10] flex flex-col justify-center items-center px-6 pt-[10rem] pb-20 text-white text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 overflow-visible">
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Deepfake Detection Using Deep Learning Techniques
        </span>
      </h1>

      <ul className="max-w-3xl text-left text-gray-300 text-lg mb-10 list-disc list-inside space-y-4">
        <li>
          Built a hybrid CNN-LSTM model combining ResNeXt-50 for spatial feature
          extraction and LSTM for temporal video frame analysis.
        </li>
        <li>
          Trained on curated datasets of deepfake and real videos with
          pre-cropped faces from Kaggle and FaceForensics++.
        </li>
        <li>
          Achieved 88.46% accuracy, 91.35% precision, and 87.46% F1 score for
          real vs fake classification.
        </li>
        <li>
          Designed the system to process video sequences, extract key frames,
          and classify them using learned spatio-temporal features.
        </li>
        <li>
          Visualized training metrics and confusion matrix with Matplotlib and
          Seaborn for performance evaluation.
        </li>
        <li>
          Implemented on Google Colab using PyTorch, OpenCV, face_recognition,
          and custom dataset handling with DataLoader.
        </li>
        <li>
          Proposed future improvements including Transformer-based models, audio
          integration, and edge-device deployment.
        </li>
      </ul>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md">
        <a
          href="https://github.com/Varshan-Manish/Deepfake-Detector-Using-CNN-and-LSTM"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1_I-v_Kw5Q-EruItzJ_mVeoMqlhDHWJ3x/view?usp=sharing"
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

export default DeepfakeDetectionProjectContent;
