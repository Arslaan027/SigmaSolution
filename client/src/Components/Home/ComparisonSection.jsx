import React from "react";

const ComparisonSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Grow Your Business instead of Complex Registration processes and leave
          it for us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          With other service providers you would have to pay for each compliance
          filing individually!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <span>
                  Income Tax Return filing of the Directors and Shareholders
                </span>
                <span>₹4,000</span>
              </li>
              <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <span>INC 20A filing</span>
                <span>₹1,000</span>
              </li>
              <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <span>ADT 1 filing</span>
                <span>₹1,000</span>
              </li>
              <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <span>Monthly GST filings</span>
                <span>₹10,000</span>
              </li>
              <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <span>Quarterly TDS filings</span>
                <span>₹5,000</span>
              </li>
            </ul>
            <div className="text-center mt-6">
              <span className="bg-yellow-500 text-white rounded-full px-4 py-2 font-bold">
                50k+
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="useRegisterKaro"
                className="w-6 h-6 text-yellow-500 bg-white border-gray-300 rounded focus:ring-yellow-500"
              />
              <label
                htmlFor="useRegisterKaro"
                className="ml-3 text-lg font-medium text-gray-700"
              >
                Use RegisterKaro
              </label>
            </div>
            <p className="text-gray-600 mb-6">
              Get all your Compliance done with the help of Industry Experts and
              channelize that precious time to grow your business.
            </p>
            <div className="text-center">
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300">
                Get Started!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
