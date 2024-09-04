import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import BottomNavbar from "./BottomNav"; // Ensure this import matches the actual file name
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import BottomBar from "./BottomBar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
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
      <MainNavbar
        isFixed={isFixed}
        handleSidebarToggle={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        handleDropdownToggle={handleDropdownToggle}
        dropdownOpen={dropdownOpen}
      />

      {/* Bottom Navbar */}
      <BottomNavbar
        isFixed={isFixed}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        handleDropdownToggle={handleDropdownToggle}
        dropdownOpen={dropdownOpen}
      />

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 bg-white text-black dark:bg-gray-900 dark:text-gray-100 p-6 transform z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden shadow-md dark:shadow-gray-900`}
      >
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
        {/* Sidebar Links */}
        <div className="mt-4 flex flex-col space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "Biz Registrations", path: "/biz" },
            "Accounting",
            "Interior Design",
            "Furniture",
            "Decor Items",
            "Horeca Services",
            "Packaging & Printing",
            "Digital Marketing",
            "Prod Setup",
            "Storage & Handling",
            "IT & Security",
            "Biz Deals",
            "Architecture",
          ].map((link, index) => (
            <div key={link.name || link} className="relative">
              {link.path ? (
                <Link
                  to={link.path}
                  className={`${
                    activeLink === link.name
                      ? "bg-black text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  } px-4 py-2 rounded-md w-full text-left block`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleDropdownToggle(index)}
                  className={`${
                    activeLink === link
                      ? "bg-black text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  } px-4 py-2 rounded-md w-full text-left`}
                >
                  {link}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Navbar;
