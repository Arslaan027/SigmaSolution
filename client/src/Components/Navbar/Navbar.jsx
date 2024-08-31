import React, { useState, useEffect } from "react";
import logo from "../../assets/Image/DummyLogo.png";
import { IoSearchSharp } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSupportAgent } from "react-icons/md";
import Hamburger from "hamburger-react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // const handleThemeToggle = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  return (
    <div>
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-4 border-0 border-gray-200 dark:border-gray-800 shadow-md dark:shadow-gray-900 sm:bg-transparent">
        {/* Left Side with Logo */}
        <div className="flex items-center space-x-2 text-sm">
          <img src={logo} alt="SS Logo" className="h-10 w-auto" />

          {/* Center Logo */}
          <div className="font-bold tracking-wider text-xl md:text-2xl dark:text-gray-400 lg:block">
            <h1 className="dark:text-gray-400">Sigma-Solution</h1>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <Hamburger
            toggled={isSidebarOpen}
            toggle={setIsSidebarOpen}
            size={24}
            color="#000"
          />

          {/* ===> LIGHT/DARK */}
          {/* <button
            onClick={handleThemeToggle}
            className="ml-4 p-2 rounded-md focus:outline-none flex items-center"
          >
            {isDarkMode ? (
              <FaRegSun className="text-xl text-yellow-500" />
            ) : (
              <FaRegMoon className="text-xl text-gray-600" />
            )}
          </button> */}
        </div>

        {/* Right Side */}
        <div className="space-x-4 text-sm hidden lg:flex items-center">
          {/* ===> LIGHT/DARK */}
          {/* <button
            onClick={handleThemeToggle}
            className="border px-4 py-2 rounded-xl focus:outline-none flex items-center space-x-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 shadow-md dark:shadow-gray-900"
          >
            {isDarkMode ? (
              <FaRegSun className="text-xl text-yellow-500" />
            ) : (
              <FaRegMoon className="text-xl text-gray-600" />
            )}
          </button> */}
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-black text-white dark:bg-gray-700 dark:text-gray-400 shadow-md dark:shadow-gray-900">
        <nav className="hidden lg:flex justify-between items-center space-x-6 py-2 px-4">
          <div className="flex space-x-6 overflow-x-auto">
            {[
              "WHAT'S NEW",
              "DESIGNERS",
              "CLOTHING",
              "SHOES",
              "BAGS",
              "ACCESSORIES",
              "JEWELRY",
              "LINGERIE",
              "BEAUTY",
              "MAGAZINE",
            ].map((link) => (
              <Link
                key={link}
                href="#"
                onClick={() => handleLinkClick(link)}
                className={`${
                  activeLink === link
                    ? "bg-black text-white"
                    : "hover:bg-white hover:text-black dark:hover:bg-gray-700 dark:hover:text-gray-100"
                } px-4 py-2 rounded h-full flex items-center transition duration-300 ease-in-out`}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md text-black dark:bg-gray-900 dark:text-gray-400 focus:outline-none"
            />
            <button className="absolute h-10 right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
              <IoSearchSharp className="text-xl" />
            </button>
          </div>
        </nav>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 bg-white text-black dark:bg-dark-bg dark:text-gray-100 p-6 transform z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden shadow-md dark:shadow-gray-900`}
      >
        <nav className="flex flex-col space-y-4">
          {/* Logo and Company Name for Mobile */}
          {/* <div className="flex items-center space-x-2">
            <img src={logo} alt="SS Logo" className="h-10 w-auto" />
            <h1 className="text-xl font-bold dark:text-gray-400">
              Sigma-Solution
            </h1>
          </div> */}

          {/* Search Bar */}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-200 focus:outline-none"
            />
            <button className="absolute h-10 right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
              <IoSearchSharp className="text-xl" />
            </button>
          </div>
          {[
            "WHAT'S NEW",
            "DESIGNERS",
            "CLOTHING",
            "SHOES",
            "BAGS",
            "ACCESSORIES",
            "JEWELRY",
            "LINGERIE",
            "BEAUTY",
            "MAGAZINE",
          ].map((link) => (
            <Link
              key={link}
              href="#"
              onClick={() => handleLinkClick(link)}
              className={`${
                activeLink === link
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              } px-4 py-2 rounded transition duration-300 ease-in-out`}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 text-black dark:bg-dark-bg dark:text-gray-100 py-2 flex justify-around items-center lg:hidden z-40 shadow-2xl dark:shadow-gray-900">
        <Link
          href="#"
          className={`${
            activeLink === "Profile"
              ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105"
              : ""
          } flex flex-col items-center p-4 transition-transform duration-300 ease-in-out`}
          onClick={() => handleLinkClick("Profile")}
        >
          <CgProfile className="text-2xl" />
          <span className="text-xs">Profile</span>
        </Link>
        <Link
          href="#"
          className={`${
            activeLink === "Home"
              ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105"
              : ""
          } flex flex-col items-center p-4 transition-transform duration-300 ease-in-out`}
          onClick={() => handleLinkClick("Home")}
        >
          <GoHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </Link>

        <Link
          href="#"
          className={`${
            activeLink === "Support"
              ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105"
              : ""
          } flex flex-col items-center p-4 transition-transform duration-300 ease-in-out`}
          onClick={() => handleLinkClick("Support")}
        >
          <MdOutlineSupportAgent className="text-2xl" />
          <span className="text-xs">Support</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
