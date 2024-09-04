import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  //===> TEST

  return (
    <div className="fixed bottom-5 w-[90vw] rounded-full mx-auto left-0 right-0 bg-gray-100 text-black dark:bg-dark-bg dark:text-gray-100 py-2 flex justify-around items-center lg:hidden h-20 z-40 shadow-2xl dark:shadow-gray-900">
      <Link
        to="/profile"
        className={`${
          activeLink === "Profile"
            ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105 shadow-lg"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
        } flex flex-col items-center p-4 transition-all duration-300 ease-in-out transform rounded-full`}
        onClick={() => handleLinkClick("Profile")}
      >
        <CgProfile className="text-md" />
        <span className="text-xs">Profile</span>
      </Link>
      <Link
        to="/"
        className={`${
          activeLink === "Home"
            ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105 shadow-lg"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
        } flex flex-col items-center p-4 transition-all duration-300 ease-in-out transform rounded-full`}
        onClick={() => handleLinkClick("Home")}
      >
        <IoHomeOutline className="text-md" />
        <span className="text-xs">Home</span>
      </Link>
      <Link
        to="/support"
        className={`${
          activeLink === "Support"
            ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105 shadow-lg"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
        } flex flex-col items-center p-4 transition-all duration-300 ease-in-out transform rounded-full`}
        onClick={() => handleLinkClick("Support")}
      >
        <MdOutlineSupportAgent className="text-md" />
        <span className="text-xs">Help</span>
      </Link>
    </div>
  );
};

export default BottomNavBar;
