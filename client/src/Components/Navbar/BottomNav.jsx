import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BottomNavbar = ({
  isFixed,
  activeLink,
  handleLinkClick,
  handleDropdownToggle,
  dropdownOpen,
  isVisible,
}) => {
  return (
    <div
      className={`${
        isFixed ? "fixed top-6 left-0 right-0" : "relative"
      } bg-black text-white dark:bg-gray-700 dark:text-gray-400 shadow-md dark:shadow-gray-900 lg:block transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } hidden lg:flex`}
      style={{ width: "100%", zIndex: 20 }}
    >
      <nav className="flex justify-between items-center space-x-4 px-2 py-1">
        <div className="flex space-x-2 overflow-x-auto">
          {[
            { name: "Biz Registrations", path: "/biz" },
            "Accounting",
            "Interior Design",
            "Furniture",
            { name: "Decor Items", path: "/horeca" },
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
                  onClick={() => handleLinkClick(link.name)}
                  className={`${
                    activeLink === link.name
                      ? "bg-black text-white"
                      : "hover:bg-white hover:text-black dark:hover:bg-gray-700 dark:hover:text-gray-100"
                  } px-2 py-1 text-sm rounded h-full flex items-center transition duration-300 ease-in-out`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleDropdownToggle(index)}
                  className={`${
                    activeLink === link
                      ? "bg-black text-white"
                      : "hover:bg-white hover:text-black dark:hover:bg-gray-700 dark:hover:text-gray-100"
                  } px-2 py-1 text-sm rounded h-full flex items-center transition duration-300 ease-in-out`}
                >
                  {link}
                </button>
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
