"use client";

import { motion } from "framer-motion";

const AssetTokenizerProjectContent = () => {
  return (
    <motion.section
      className="relative z-[10] flex flex-col justify-center items-center px-6 pt-[10rem] pb-20 text-white text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 overflow-visible">
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Real Estate Asset Tokenizer - Using Blockchain
        </span>
      </h1>

      <ul className="max-w-3xl text-left text-gray-300 text-lg mb-10 list-disc list-inside space-y-4">
        <li>
          Developed a blockchain-based tokenization platform for real estate
          assets, leveraging Ethereum smart contracts.
        </li>
        <li>
          Built a secure decentralized app (DApp) for users to invest in
          fractionalized ownership of real estate properties.
        </li>
        <li>
          Integrated asset management, including creation, modification, and
          deletion of properties on the blockchain.
        </li>
        <li>
          Enabled seamless investment opportunities by minting ERC-1155 tokens
          representing ownership shares of real estate assets.
        </li>
        <li>
          Implemented authentication with MetaMask for wallet-based user login
          and token transactions.
        </li>
        <li>
          Wrote Solidity smart contracts for property tokenization and ownership
          tracking, ensuring compliance with token standards.
        </li>
        <li>
          Utilized MongoDB for backend data storage, tracking token ownership
          and asset availability in real time.
        </li>
      </ul>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md">
        <a
          href="https://github.com/Varshan-Manish/Real-Estate-Asset-Tokenizer-Blockchain"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1TDbGVC2I1jmyKkiD72swBOkKGAAEJDBF/view?usp=sharing"
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

export default AssetTokenizerProjectContent;
