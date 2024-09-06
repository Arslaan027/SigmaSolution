import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import BottomNavbar from "./BottomNav";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import BottomBar from "./BottomBar";
import Navbar1 from "./Nav";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }

      setPrevScrollY(currentScrollY);
      setIsFixed(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

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

  // Filter links based on the search query
  const filteredLinks = [
    { name: "Home", path: "/" },
    { name: "Biz Registrations", path: "/biz" },
    "Accounting",
    "Interior Design",
    "Furniture",
    "Decor Items",
    { name: "Horeca Services", path: "/horeca" },
    "Packaging & Printing",
    "Digital Marketing",
    "Prod Setup",
    "Storage & Handling",
    "IT & Security",
    "Biz Deals",
    "Architecture",
  ].filter((link) =>
    typeof link === "string"
      ? link.toLowerCase().includes(searchQuery.toLowerCase())
      : link.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <BottomNavbar
        isFixed={isFixed}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        handleDropdownToggle={handleDropdownToggle}
        dropdownOpen={dropdownOpen}
        isVisible={scrollDirection === "up" || !isFixed}
      />

      <Navbar1 />

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-200 focus:outline-none"
          />
          <button className="absolute h-10 right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
            <IoSearchSharp className="text-xl" />
          </button>
        </div>
        {/* Sidebar Links */}
        <div className="mt-4 flex flex-col space-y-4">
          {filteredLinks.map((link, index) => (
            <div key={link.name || link} className="relative">
              {typeof link === "object" ? (
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
