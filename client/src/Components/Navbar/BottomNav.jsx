import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BottomNavbar = ({
  isFixed,
  activeLink,
  handleLinkClick,
  handleDropdownToggle,
  dropdownOpen,
}) => {
  return (
    <div
      className={`${isFixed} bg-black text-white dark:bg-gray-700 dark:text-gray-400 shadow-md dark:shadow-gray-900`}
    >
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
  );
};

export default BottomNavbar;
