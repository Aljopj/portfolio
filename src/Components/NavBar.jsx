import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Automatically close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuClasses = classNames(
    'fixed top-0 left-0 h-screen w-3/4 bg-gradient-to-r from-black to-green-600 text-white flex flex-col items-start justify-center space-y-6 px-8 transform transition-all duration-300 ease-in-out opacity-100',
    {
      'translate-x-0 opacity-100': isMobileMenuOpen,
      '-translate-x-full opacity-0': !isMobileMenuOpen,
      'lg:static lg:flex lg:flex-row lg:h-auto lg:w-auto lg:space-y-0 lg:space-x-6 lg:bg-transparent lg:translate-x-0 lg:opacity-100': true,
    }
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black to-green-500 text-white backdrop-blur-lg shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo/Title */}
        <h1 className="text-lg font-bold text-green-300 hover:text-green-200">
          Aljo pj Full Stack Developer
        </h1>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-2xl focus:outline-none z-50 text-green-300 hover:text-green-200"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FaTimes aria-hidden={!isMobileMenuOpen} /> : <FaBars aria-hidden={isMobileMenuOpen} />}
        </button>

        {/* Navigation Links */}
        <ul className={menuClasses} role="dialog">
          {['home', 'projects', 'experience', 'education', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={closeMenu}
                className="hover:text-green-200 text-green-300 text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Overlay for Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={closeMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;





