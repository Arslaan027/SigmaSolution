import React from "react";
import {
  FiHelpCircle,
  FiUser,
  FiCheckCircle,
  FiCalendar,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

const Roadmap = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h3 className="text-3xl font-bold text-gray-800">
          Stepwise Company
          <span className="text-red-500"> Registration Process</span>
        </h3>
      </div>
      {/* Section 1: Online Company Registration in Three Easy Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {/* Left section */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-6">
            Online Company Registration in Three Easy Steps!
          </h2>
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start">
              <FiHelpCircle className="text-red-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-red-500">
                  1. Answer Quick Questions
                </h3>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>Pick the most suitable package</li>
                  <li>Take 5-10 minutes to answer simple questions</li>
                  <li>Provide documents as per the checklist</li>
                  <li>Make payment through a secured payment gateway</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <FiUser className="text-red-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-red-500">
                  2. Experts at Your Service
                </h3>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>We will assign a Relationship Manager</li>
                  <li>Relax while experts draft and file your documents</li>
                  <li>
                    We commit to addressing any queries within 24 business hours
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <FiCheckCircle className="text-red-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-red-500">
                  3. You are All Set to Roll
                </h3>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>All it takes is 10-12 working days*</li>
                  <li>
                    Let’s keep your business compliant and protected. Time to
                    get on a free assessment call
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-6">
            Quickest Way to Register a Company
          </h2>
          <div className="space-y-6">
            {/* Day 1-2 */}
            <div className="flex items-start">
              <FiCalendar className="text-red-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-red-500">Days 1 - 2</h3>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>Experts review your documents and information</li>
                  <li>Apply for Digital Signature Certificate</li>
                </ul>
              </div>
            </div>

            {/* Day 3-6 */}
            <div className="flex items-start">
              <FiFileText className="text-red-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-red-500">Days 3 - 6</h3>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>Name availability check on MCA and IP India Portals</li>
                  <li>Apply for Company Name Reservation</li>
                  <li>MoA and AoA drafting</li>
                </ul>
              </div>
            </div>

            {/* Day 7-9 */}
            <div className="flex items-start">
              <FiSettings className="text-red-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-red-500">Days 7 - 9</h3>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>Form filling for Certificate of Incorporation (COI)</li>
                  <li>DIN Allotment Application</li>
                  <li>PAN and TAN Application</li>
                </ul>
              </div>
            </div>

            {/* Day 10-12 */}
            <div className="flex items-start">
              <FiCheckCircle className="text-red-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-red-500">Days 10 - 12</h3>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>Awaiting MCA approval</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 text-center">
        *Subject to Government processing time
      </p>
    </div>
  );
};

export default Roadmap;
