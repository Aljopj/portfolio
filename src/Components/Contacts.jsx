import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="min-h-screen py-12 px-6 bg-gradient-to-br from-black to-green-900 text-white flex justify-center items-center">
      <div className="w-full max-w-4xl space-y-8">
        {/* Title */}
        <motion.div
          className="text-center"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >    
         <h1 className="text-4xl sm:text-5xl font-bold text-green-400 text-center mb-12 animate-fade-down">
        Let's Connect
      </h1>

          <p className="text-gray-300 mt-4">
            I'm always happy to discuss new opportunities and collaborations. Feel free to reach out through the channels below!
          </p>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          className="space-y-6"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 hover:text-lime-400 transition-colors duration-300">
            <FaEnvelope className="text-yellow-400 text-2xl" />
            <p className="font-semibold text-lg">aljopj10@email.com</p>
          </div>
          <div className="flex items-center gap-4 hover:text-lime-400 transition-colors duration-300">
            <FaPhone className="text-yellow-400 text-2xl" />
            <p className="font-semibold text-lg">+91 7994198259</p>
          </div>
          <div className="flex items-center gap-4 hover:text-lime-400 transition-colors duration-300">
            <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
            <p className="font-semibold text-lg">Anandapuram, Thrissur, Kerala, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;



