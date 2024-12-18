import React from 'react';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-br from-black to-green-900 text-green-300 pt-20 py-12 px-4 md:py-16 md:px-6"
    >
      {/* Section Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-green-400 mb-8 text-center">
        Education
      </h1>

      {/* Education Container */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* MERN Stack Internship */}
        <div className="group relative w-full p-6 border border-green-600 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md hover:scale-105 hover:border-green-400 transition-transform duration-300 ease-out animate-fade-up">
          <div className="flex items-center space-x-3 mb-4">
            <FaGraduationCap className="text-green-400 text-3xl group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-2xl font-bold text-green-400">
              MERN Stack Internship
            </h3>
          </div>
          <p className="text-lg text-green-300">Synnefo Solutions</p>
          <p className="text-green-500 italic text-sm">Completed in 2024</p>
          <p className="text-green-400 text-sm">Certified MERN Developer</p>
        </div>

        {/* Bachelor's Degree */}
        <div className="group relative w-full p-6 border border-green-600 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md hover:scale-105 hover:border-green-400 transition-transform duration-300 ease-out animate-fade-up delay-150">
          <div className="flex items-center space-x-3 mb-4">
            <FaUniversity className="text-green-400 text-3xl group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-2xl font-bold text-green-400">
              Bachelor of Science in Computer Science
            </h3>
          </div>
          <p className="text-lg text-green-300">Calicut University</p>
          <p className="text-green-500 italic text-sm">Passout of 2024</p>
        </div>

        {/* High School */}
        <div className="group relative w-full p-6 border border-green-600 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md hover:scale-105 hover:border-green-400 transition-transform duration-300 ease-out animate-fade-up delay-300">
          <div className="flex items-center space-x-3 mb-4">
            <FaSchool className="text-green-400 text-3xl group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-2xl font-bold text-green-400">High School</h3>
          </div>
          <p className="text-lg text-green-300">GHSS High School</p>
          <p className="text-green-500 italic text-sm">Graduated in 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;


