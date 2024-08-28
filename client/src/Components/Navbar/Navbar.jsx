import React, { useState } from "react";
import { Link } from "react-router-dom";
import DummyLogo from "../../assets/Image/DummyLogo.png"; // Adjust the path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <nav
      className={`bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-md ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Menu Icon for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={DummyLogo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Navbar Links for Desktop */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </Link>
          {/* Dark Mode Toggle */}
          <button
            className="text-white hover:text-gray-300 transition-colors duration-300"
            onClick={toggleTheme}
          >
            {darkMode ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m-7.07-7.07l.707.707m11.313 0l.707-.707m-1.414-11.313l.707.707m-1.414 11.313l.707.707M12 8a4 4 0 01-4 4 4 4 0 014-4z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m-7.07-7.07l.707.707m11.313 0l.707-.707m-1.414-11.313l.707.707m-1.414 11.313l.707.707M12 8a4 4 0 01-4 4 4 4 0 014-4z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-gray-700 to-gray-500 bg-opacity-90 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="w-2/4 bg-gradient-to-r  h-full p-6">
          <h2 className="text-white text-2xl font-semibold">Sigma Solutions</h2>
          <button
            className="text-white float-right text-3xl"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <div className="mt-8">
            <Link
              to="/"
              className="block text-white text-xl py-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white text-xl py-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-white text-xl py-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-white text-xl py-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <button
              className="block text-white text-xl py-2 hover:text-gray-300"
              onClick={() => {
                toggleMenu();
                toggleTheme();
              }}
            >
              {darkMode ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m-7.07-7.07l.707.707m11.313 0l.707-.707m-1.414-11.313l.707.707m-1.414 11.313l.707.707M12 8a4 4 0 01-4 4 4 4 0 014-4z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m-7.07-7.07l.707.707m11.313 0l.707-.707m-1.414-11.313l.707.707m-1.414 11.313l.707.707M12 8a4 4 0 01-4 4 4 4 0 014-4z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
