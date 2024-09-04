import React from "react";

const BestBusiness = () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800">
            Find Your Ideal{" "}
            <span className="text-red-500">Business Structure</span> That Works
            Best For Your Business.
          </h3>
        </div>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 font-semibold text-left">
                  Criteria
                </th>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 font-semibold text-left">
                  Private Limited Company
                </th>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 font-semibold text-left">
                  One Person Company
                </th>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 font-semibold text-left">
                  Limited Liability Partnership
                </th>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 font-semibold text-left">
                  Partnership Firm
                </th>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 font-semibold text-left">
                  Proprietorship Firm
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Applicable Law
                </td>
                <td className="py-3 px-6 border-b">Companies Act, 2013</td>
                <td className="py-3 px-6 border-b">Companies Act, 2013</td>
                <td className="py-3 px-6 border-b">
                  Limited Liability Partnership Act, 2008
                </td>
                <td className="py-3 px-6 border-b">
                  Indian Partnership Act, 1932
                </td>
                <td className="py-3 px-6 border-b">No specified Act</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Registration
                </td>
                <td className="py-3 px-6 border-b">Mandatory</td>
                <td className="py-3 px-6 border-b">Mandatory</td>
                <td className="py-3 px-6 border-b">Mandatory</td>
                <td className="py-3 px-6 border-b">Optional</td>
                <td className="py-3 px-6 border-b">No</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Number of Owners
                </td>
                <td className="py-3 px-6 border-b">2 - 200</td>
                <td className="py-3 px-6 border-b">Only 1</td>
                <td className="py-3 px-6 border-b">2 - Unlimited</td>
                <td className="py-3 px-6 border-b">2 - 50</td>
                <td className="py-3 px-6 border-b">Only 1</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Separate Legal Entity
                </td>
                <td className="py-3 px-6 border-b">Yes</td>
                <td className="py-3 px-6 border-b">Yes</td>
                <td className="py-3 px-6 border-b">Yes</td>
                <td className="py-3 px-6 border-b">No</td>
                <td className="py-3 px-6 border-b">No</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Liability Protection
                </td>
                <td className="py-3 px-6 border-b">Limited</td>
                <td className="py-3 px-6 border-b">Limited</td>
                <td className="py-3 px-6 border-b">Limited</td>
                <td className="py-3 px-6 border-b">Unlimited</td>
                <td className="py-3 px-6 border-b">Unlimited</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Statutory Audit
                </td>
                <td className="py-3 px-6 border-b">Mandatory</td>
                <td className="py-3 px-6 border-b">Mandatory</td>
                <td className="py-3 px-6 border-b">As Applicable</td>
                <td className="py-3 px-6 border-b">Not Mandatory</td>
                <td className="py-3 px-6 border-b">Not Mandatory</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Ownership Transfer
                </td>
                <td className="py-3 px-6 border-b">Yes</td>
                <td className="py-3 px-6 border-b">Yes (Restricted)</td>
                <td className="py-3 px-6 border-b">Yes</td>
                <td className="py-3 px-6 border-b">Yes (Restricted)</td>
                <td className="py-3 px-6 border-b">No</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Perpetual Existence
                </td>
                <td className="py-3 px-6 border-b">Yes</td>
                <td className="py-3 px-6 border-b">Yes</td>
                <td className="py-3 px-6 border-b">Yes</td>
                <td className="py-3 px-6 border-b">No</td>
                <td className="py-3 px-6 border-b">No</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Foreign Ownership
                </td>
                <td className="py-3 px-6 border-b">Allowed</td>
                <td className="py-3 px-6 border-b">Not Allowed</td>
                <td className="py-3 px-6 border-b">Allowed</td>
                <td className="py-3 px-6 border-b">Allowed</td>
                <td className="py-3 px-6 border-b">Not Allowed</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Taxation Liability
                </td>
                <td className="py-3 px-6 border-b">Moderate</td>
                <td className="py-3 px-6 border-b">Moderate</td>
                <td className="py-3 px-6 border-b">High</td>
                <td className="py-3 px-6 border-b">High</td>
                <td className="py-3 px-6 border-b">Low</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-red-500">
                  Compliance Requirement
                </td>
                <td className="py-3 px-6 border-b">High</td>
                <td className="py-3 px-6 border-b">High</td>
                <td className="py-3 px-6 border-b">Moderate</td>
                <td className="py-3 px-6 border-b">Low</td>
                <td className="py-3 px-6 border-b">Low</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold"></td>
                <td className="py-2 px-6 border-b">
                  <button className="bg-red-500 text-white px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm rounded-lg shadow-md hover:bg-red-600 whitespace-nowrap">
                    Learn More
                  </button>
                </td>
                <td className="py-2 px-6 border-b">
                  <button className="bg-red-500 text-white px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm rounded-lg shadow-md hover:bg-red-600 whitespace-nowrap">
                    Learn More
                  </button>
                </td>
                <td className="py-3 px-6 border-b">
                  <button className="bg-red-500 text-white px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm rounded-lg shadow-md hover:bg-red-600 whitespace-nowrap">
                    Learn More
                  </button>
                </td>
                <td className="py-2 px-6 border-b">
                  <button className="bg-red-500 text-white px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm rounded-lg shadow-md hover:bg-red-600 whitespace-nowrap">
                    Learn More
                  </button>
                </td>
                <td className="py-2 px-6 border-b">
                  <button className="bg-red-500 text-white px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm rounded-lg shadow-md hover:bg-red-600 whitespace-nowrap">
                    Learn More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BestBusiness;
