import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./style.css"; // Import the updated stylesheet

const ComparisonSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  const listItems = [
    {
      label: "Income Tax Return filing of the Directors and Shareholders",
      amount: 4000,
    },
    { label: "INC 20A filing", amount: 1000 },
    { label: "ADT 1 filing", amount: 1000 },
    { label: "Monthly GST filings", amount: 10000 },
    { label: "Quarterly TDS filings", amount: 5000 },
    { label: "Annual Compliance Report", amount: 8000 },
    { label: "Filing of Form 8", amount: 1200 },
    { label: "ROC Annual Return", amount: 1500 },
    { label: "Company Name Change Filing", amount: 2500 },
    { label: "Annual Financial Statements", amount: 3000 },
  ];

  return (
    <section className="bg-white py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold  text-gray-800 mb-8 text-center">
          <span className="text-red-500">Grow Your Business</span> instead of{" "}
          Complex Registration processes and leave it for{" "}
          <span className="text-red-500">Sigma Solution</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          With other service providers you would have to pay for each compliance
          filing individually!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md scrollable-list">
            <ul className="space-y-4">
              {listItems.concat(listItems).map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white rounded-lg shadow hover:bg-gray-50"
                >
                  <span>{item.label}</span>
                  <span>
                    ₹
                    {inView ? (
                      <CountUp start={0} end={item.amount} duration={4} />
                    ) : (
                      "0"
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="useSigmaSolution"
                className="w-6 h-6 text-red-400 bg-white border-gray-300 rounded focus:ring-red-400"
              />
              <label
                htmlFor="useSigmaSolution"
                className="ml-3 text-lg font-medium text-gray-700"
              >
                Use SigmaSolution
              </label>
            </div>
            <p className="text-gray-600 mb-6">
              Get all your Compliance done with the help of Industry Experts and
              channelize that precious time to grow your business.
            </p>
            <div className="text-center">
              <button className="bg-red-400 text-white px-6 py-2 rounded-lg shadow hover:bg-red-500 transition duration-300">
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
