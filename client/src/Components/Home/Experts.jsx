import React from "react";

const Experts = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-6 rounded-lg shadow-lg py-16 my-16">
      {/* Left Section - Text Content */}
      <div className="flex-1 md:mr-6 order-1 md:order-1 mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-red-500">Private Limited Company</span>{" "}
          Registration-Online
        </h2>
        <p className="text-lg mb-2">
          Pvt Ltd Company Registration Starts from{" "}
          <span className="text-red-500">
            <b>₹8,499/-</b>
          </span>{" "}
          Only!
        </p>
        <ul className="list-disc ml-4 mb-4">
          <li>No Hidden Charges</li>
          <li>Lowest Price Guarantee</li>
          <li>Quick and Hassle-Free Process</li>
          <li>Free Expert Assistance for Lifetime</li>
        </ul>
        <p className="mt-4 flex items-center">
          <span className="text-yellow-500 text-lg mr-2">★★★★</span>
          <span>Google Customer Rating: 4</span>
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 mt-6 md:mt-0 md:ml-6 order-2 md:order-2">
        <div className="bg-white text-black p-4 rounded-lg shadow-md mx-auto w-full md:w-3/4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2">
            Get <span className="text-red-500">Expert</span> Consultation
          </h3>

          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="mb-3 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-3 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Mobile"
              className="mb-3 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="mx-auto">
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Reach Out
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Experts;
