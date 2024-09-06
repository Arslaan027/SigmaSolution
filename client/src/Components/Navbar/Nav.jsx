// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Biz Registrations",
      path: "/biz",
      subcategories: ["Business Licenses", "Permits"],
    },
    { name: "Accounting", subcategories: ["Bookkeeping", "Tax Services"] },
    { name: "Interior Design", subcategories: ["Residential", "Commercial"] },
    { name: "Furniture", subcategories: ["Living Room", "Office"] },
    { name: "Decor Items", subcategories: ["Wall Art", "Lighting"] },
    {
      name: "Horeca Services",
      path: "/horeca",
      subcategories: ["Hotel Services", "Restaurant Services"],
    },
    {
      name: "Packaging & Printing",
      subcategories: ["Custom Packaging", "Printing Services"],
    },
    { name: "Digital Marketing", subcategories: ["SEO", "Social Media"] },
    {
      name: "Prod Setup",
      subcategories: ["Product Setup A", "Product Setup B"],
    },
    { name: "Storage & Handling", subcategories: ["Warehousing", "Logistics"] },
    {
      name: "IT & Security",
      subcategories: ["Network Security", "IT Support"],
    },
    { name: "Biz Deals", subcategories: ["Partnerships", "Discounts"] },
    { name: "Architecture", subcategories: ["Residential", "Commercial"] },
  ];

  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex space-x-4 p-4">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            {item.path ? (
              <Link
                to={item.path}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                {item.name}
              </Link>
            ) : (
              <span className="block px-4 py-2 cursor-pointer hover:bg-gray-700">
                {item.name}
              </span>
            )}
            {item.subcategories && (
              <div className="absolute left-0 hidden mt-2 space-y-2 bg-white text-black group-hover:block">
                {item.subcategories.map((subcategory, subIndex) => (
                  <Link
                    key={subIndex}
                    to={`/${item.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}/${subcategory
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar1;
