import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-12 bg-gradient-to-br from-black to-green-900"
    >
      <div className="container mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-green-400 text-center mb-12 animate-fade-down">
          Projects
        </h1>

        {/* Projects Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Project 1 */}
          <div className="group bg-gray-900 border border-lime-400 shadow-lg p-6 rounded-md max-w-xs transform skew-y-3 hover:skew-y-0 hover:scale-105 transition-transform duration-300">
            <img
              src="./images/blooddonor.avif"
              alt="Portfolio Project"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-bold text-green-400 mb-2 group-hover:text-lime-200 transition-colors duration-300">
              Blood Donor
            </h2>
            <p className="text-green-300 mb-4">It is a datatable of donors using the crud operation of express</p>
            <a
              href="https://github.com/Aljopj/express/tree/donor"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-gray-800 text-white text-center rounded-md hover:bg-lime-400 hover:text-black transition duration-300"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="group bg-gray-900 border border-lime-400 shadow-lg p-6 rounded-md max-w-xs transform -skew-y-3 hover:skew-y-0 hover:scale-105 transition-transform duration-300">
            <img
              src="./images/ecommerce.jpeg"
              alt="E-commerce Project"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-bold text-green-400 mb-2 group-hover:text-blue-200 transition-colors duration-300">
              E-Commerce
            </h2>
            <p className="text-green-300 mb-4">MERN Stack</p>
            <a
              href="https://github.com/yourusername/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-gray-800 text-white text-center rounded-md hover:bg-lime-400 hover:text-black transition duration-300"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 3 */}
          <div className="group bg-gray-900 border border-lime-500 shadow-lg p-6 rounded-md max-w-xs transform skew-y-3 hover:skew-y-0 hover:scale-105 transition-transform duration-300">
            <img
              src="./images/teachers.png"
              alt="Spotify Clone"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-bold text-green-400 mb-2 group-hover:text-lime-200 transition-colors duration-300">
            Teachers Datatable
            </h2>
            <p className="text-green-300 mb-4">It is a datatable of Teachers using the crud operation of node</p>
            <a
              href="https://github.com/Aljopj/node-project"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-gray-800 text-white text-center rounded-md hover:bg-lime-400 hover:text-black transition duration-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;





