import React from "react";
import logo from "../../assets/Image/DummyLogo.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const MainNavbar = ({
  isFixed,
  handleSidebarToggle,
  isSidebarOpen,
  activeLink,
  handleLinkClick,
}) => {
  return (
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
            to="/"
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
    </div>
  );
};

export default MainNavbar;
