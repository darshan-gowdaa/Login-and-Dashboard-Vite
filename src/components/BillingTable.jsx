import React, { useState } from "react";

const BillingTable = () => {
  const dataSets = {
    Monthly: [
      { page: "Agent Page", status: "Modified", date: "13-May-2024" },
      { page: "Thank you Page", status: "Deleted", date: "12-May-2024" },
      { page: "Subscription Page", status: "Modified", date: "11-May-2024" },
      { page: "Roles Page", status: "Modified", date: "08-May-2024" },
      { page: "FAQ Page", status: "Added", date: "12-May-2023" },
    ],
    Quarterly: [
      { page: "Dashboard", status: "Added", date: "13-Apr-2024" },
      { page: "Settings Page", status: "Modified", date: "12-Mar-2024" },
      { page: "FAQ Page", status: "Added", date: "12-May-2023" },
      { page: "Profile Page", status: "Deleted", date: "11-Feb-2024" },
      { page: "Billing Page", status: "Added", date: "08-Jan-2024" },
    ],
    "Half Yearly": [
      { page: "Home Page", status: "Modified", date: "13-Nov-2023" },
      { page: "FAQ Page", status: "Added", date: "12-May-2023" },
      { page: "Login Page", status: "Deleted", date: "12-Oct-2023" },
      { page: "Signup Page", status: "Added", date: "11-Sep-2023" },
      { page: "Contact Page", status: "Modified", date: "08-Aug-2023" },
    ],
    Yearly: [
      { page: "About Page", status: "Deleted", date: "13-May-2023" },
      { page: "FAQ Page", status: "Added", date: "12-May-2023" },
      { page: "Pricing Page", status: "Modified", date: "11-May-2023" },
      { page: "Support Page", status: "Deleted", date: "08-May-2023" },
      { page: "Contact Page", status: "Modified", date: "08-Aug-2023" },
    ],
  };

  const [selectedDuration, setSelectedDuration] = useState("Monthly");
  const [data, setData] = useState(dataSets[selectedDuration]);

  return (
    <div className="p-2 md:p-4 bg-gray-800 rounded-lg shadow-lg animate-fade-in">
      <div className="flex items-center justify-between mb-6 gap-2">
        <h2 className="text-xl font-semibold text-white">Billing & Invoices</h2>
        <select
          className="p-2 text-white bg-gray-700 rounded-lg"
          value={selectedDuration}
          onChange={(e) => {
            setSelectedDuration(e.target.value);
            setData(dataSets[e.target.value]);
          }}
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
              <th className="p-3 border border-gray-600">Page Name</th>
              <th className="p-3 border border-gray-600">Status</th>
              <th className="p-3 border border-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                key={idx}
                className="text-white odd:bg-gray-800 even:bg-gray-700"
              >
                <td className="p-3 border border-gray-600">{item.page}</td>
                <td className="p-3 border border-gray-600">
                  <span
                    className={`px-2 py-1 rounded-lg ${
                      item.status === "Modified"
                        ? "bg-green-900 text-green-300"
                        : item.status === "Deleted"
                        ? "bg-red-900 text-red-300"
                        : "bg-blue-900 text-blue-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3 border border-gray-600">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingTable;
