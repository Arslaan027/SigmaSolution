import React, { useState, useEffect } from "react";
import logo from "../../assets/Image/DummyLogo.png";
import { IoSearchSharp, IoHomeOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import Hamburger from "hamburger-react";
import BottomNavBar from "./BottomNavBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );
  const [dropdownOpen, setDropdownOpen] = useState(null); // Updated state to manage multiple dropdowns
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isSidebarOpen) {
      setIsSidebarOpen(false); // Close sidebar on link click
    }
    // Close any open dropdowns
    setDropdownOpen(null);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div>
      {/* Main Navbar */}
      <div
        className={`${
          isFixed
            ? "fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white border-b border-gray-200 dark:border-gray-800 shadow-md dark:shadow-gray-900 z-50"
            : "relative"
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-4">
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
              toggle={handleSidebarToggle}
              size={24}
              color="#000"
            />
          </div>

          {/* Right Side */}
          <div className="space-x-4 text-sm hidden lg:flex items-center">
            <Link
              to="/home"
              onClick={() => handleLinkClick("Home")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                activeLink === "Home"
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              }`}
            >
              <IoHomeOutline className="text-xl" />
              <span>Home</span>
            </Link>

            <Link
              to="/support"
              onClick={() => handleLinkClick("Support")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                activeLink === "Support"
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              }`}
            >
              <MdOutlineSupportAgent className="text-xl" />
              <span>Support</span>
            </Link>
          </div>
        </div>

        {/* Bottom Navbar */}
        <div className="bg-black text-white dark:bg-gray-700 dark:text-gray-400 shadow-md dark:shadow-gray-900">
          <nav className="hidden lg:flex justify-between items-center space-x-6 py-2 px-4">
            <div className="flex space-x-6 overflow-x-auto">
              {[
                "Home",
                "Startup Registrations",
                "Trademark",
                "Goods & Services Tax",
                "Income Tax",
                "Compliance",
                "Bookkeeping",
                "Consultation",
              ].map((link, index) => (
                <div key={link} className="relative">
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className={`${
                      activeLink === link
                        ? "bg-black text-white"
                        : "hover:bg-white hover:text-black dark:hover:bg-gray-700 dark:hover:text-gray-100"
                    } px-4 py-2 rounded h-full flex items-center transition duration-300 ease-in-out`}
                  >
                    {link}
                  </button>
                  {dropdownOpen === index && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-gray-200 shadow-lg rounded-md">
                      <Link
                        to="#"
                        onClick={() => handleLinkClick(`${link} Option 1`)}
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Option 1
                      </Link>
                      <Link
                        to="#"
                        onClick={() => handleLinkClick(`${link} Option 2`)}
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Option 2
                      </Link>
                      <Link
                        to="#"
                        onClick={() => handleLinkClick(`${link} Option 3`)}
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Option 3
                      </Link>
                    </div>
                  )}
                </div>
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
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 bg-white text-black dark:bg-gray-900 dark:text-gray-100 p-6 transform z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden shadow-md dark:shadow-gray-900`}
      >
        <nav className="flex flex-col space-y-4">
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
            "Home",
            "Startup Registrations",
            "Trademark",
            "Goods & Services Tax",
            "Income Tax",
            "Compliance",
            "Bookkeeping",
            "Consultation",
          ].map((link, index) => (
            <div key={link} className="relative">
              <button
                onClick={() => handleDropdownToggle(index)}
                className={`${
                  activeLink === link
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                } px-4 py-2 rounded transition duration-300 ease-in-out w-full text-left`}
              >
                {link}
              </button>
              {dropdownOpen === index && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 text-black dark:text-gray-200 shadow-lg rounded-md">
                  <Link
                    to="#"
                    onClick={() => handleLinkClick(`${link} Option 1`)}
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Option 1
                  </Link>
                  <Link
                    to="#"
                    onClick={() => handleLinkClick(`${link} Option 2`)}
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Option 2
                  </Link>
                  <Link
                    to="#"
                    onClick={() => handleLinkClick(`${link} Option 3`)}
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Option 3
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Bar for Mobile */}
      <BottomNavBar />
    </div>
  );
};

export default Navbar;
