import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen  flex flex-col items-center justify-center bg-gradient-to-br from-black to-green-400 text-white text-center px-6 relative overflow-hidden"
    >
      {/* Darker Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center">
        {/* Introduction */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-gray-200 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, My Name is
        </motion.p>

        {/* Name with Bounce Animation */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, bounce: 0.6 }}
        >
          Aljo Pj
        </motion.h1>

        {/* Role/Tagline with Bright Color */}
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-green-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm a Full-Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          className="max-w-md sm:max-w-lg lg:max-w-2xl mb-8 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I'm a Full-Stack Developer specializing in building and designing web applications. 
          Currently, I am focused on crafting responsive and user-friendly full-stack solutions.
        </motion.p>

        {/* Align Social Links to the Bottom of Content */}
        <div className="mt-auto flex space-x-6">
          <a
            href="https://github.com/Aljopj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-gray-300 hover:scale-110 transition-transform duration-300"
            aria-label="Visit GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aljo-pj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-gray-300 hover:scale-110 transition-transform duration-300"
            aria-label="Visit LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;







