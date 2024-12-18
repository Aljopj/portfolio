import React from 'react';

const Experience = () => {
  const experiences = [
    { image: './images/javascript.png', name: 'JavaScript' },
    { image: './images/html.png', name: 'HTML' },
    { image: './images/css.png', name: 'CSS' },
    { image: './images/mongo.png', name: 'MongoDB' },
    { image: './images/node.png', name: 'Node.js' },
    { image: './images/images.png', name: 'Express' },
    { image: './images/github2.png', name: 'GitHub' },
    { image: './images/tailwind.png', name: 'Tailwind CSS' },
    // New Entries
    { image: './images/react.png', name: 'React' },
    { image: './images/bootstrap.png', name: 'Bootstrap' },
    { image: './images/sass.jpg', name: 'Sass' },
    { image: './images/scss.webp', name: 'Scss' },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-black to-green-900 text-white flex flex-col items-center"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-400 mb-4">
          My Experience
        </h1>
        <p className="text-lg sm:text-xl text-green-300">
          Technologies I've worked with:
        </p>
      </div>

      {/* Experience Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl w-full">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg border-2 border-lime-500 bg-gray-800 shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={experience.image}
              alt={`${experience.name} Logo`}
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-lg font-medium text-gray-300">{experience.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

