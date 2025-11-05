import React, { useState } from "react";

const InactiveTable = () => {
  const dataSets = {
    Monthly: [
      { company: "O Circle", users: 22, package: "Basic" },
      { company: "Stark Industries", users: 25, package: "Basic" },
      { company: "Wonka Industries", users: 9, package: "Silver" },
      { company: "Cyberdyne Systems", users: 11, package: "Basic" },
      { company: "ACME Corp", users: 25, package: "Basic" },
    ],
    Quarterly: [
      { company: "Globex Corporation", users: 15, package: "Gold" },
      { company: "Umbrella Corp", users: 30, package: "Basic" },
      { company: "Wayne Enterprises", users: 12, package: "Silver" },
      { company: "Initech", users: 18, package: "Basic" },
      { company: "Hooli", users: 22, package: "Gold" },
    ],
    "Half Yearly": [
      { company: "Dunder Mifflin", users: 10, package: "Basic" },
      { company: "Pied Piper", users: 20, package: "Silver" },
      { company: "Gekko & Co", users: 14, package: "Basic" },
      { company: "Veridian Dynamics", users: 25, package: "Gold" },
      { company: "Bluth Company", users: 8, package: "Basic" },
    ],
    Yearly: [
      { company: "Stark Industries", users: 30, package: "Gold" },
      { company: "Wonka Industries", users: 12, package: "Silver" },
      { company: "Cyberdyne Systems", users: 20, package: "Basic" },
      { company: "ACME Corp", users: 25, package: "Gold" },
      { company: "O Circle", users: 18, package: "Basic" },
    ],
  };

  const [selectedDuration, setSelectedDuration] = useState("Monthly");

  const getPackageClass = (pkg) =>
    pkg === "Basic"
      ? "text-purple-300 bg-purple-900"
      : pkg === "Silver"
      ? "text-blue-300 bg-blue-900"
      : "text-yellow-300 bg-yellow-900";

  return (
    <div className="p-2 md:p-4 bg-gray-800 rounded-lg shadow-lg animate-fade-in">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
        <h2 className="text-xl font-semibold text-white">
          Inactive Companies/Users
        </h2>
        <select
          className="p-2 text-white bg-gray-700 rounded-lg"
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
        >
          {Object.keys(dataSets).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-collapse border-gray-500 min-w-[600px] md:min-w-0">
          <thead>
            <tr className="text-gray-300 bg-gray-700">
              <th className="p-3 border border-gray-600">Company</th>
              <th className="p-3 border border-gray-600">No. of Users</th>
              <th className="p-3 border border-gray-600">Package</th>
              <th className="p-3 border border-gray-600">Send Reminder</th>
            </tr>
          </thead>
          <tbody>
            {dataSets[selectedDuration].map((item, idx) => (
              <tr
                key={idx}
                className="text-white odd:bg-gray-800 even:bg-gray-700"
              >
                <td className="p-3 border border-gray-600">{item.company}</td>
                <td className="p-3 border border-gray-600">{item.users}</td>
                <td className="p-3 border border-gray-600">
                  <span
                    className={`px-2 py-1 rounded-lg ${getPackageClass(
                      item.package
                    )}`}
                  >
                    {item.package}
                  </span>
                </td>
                <td className="p-3 border border-gray-600">
                  <button className="font-semibold text-red-400 hover:text-red-600 transition-all duration-200">
                    Send Reminder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InactiveTable;
