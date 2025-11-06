import React, { useState } from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChart = () => {
  const dataSets = {
    Monthly: [
      { name: "SEP", premium: 800, trial: 1400 },
      { name: "OCT", premium: 900, trial: 1500 },
      { name: "NOV", premium: 1000, trial: 1400 },
      { name: "DEC", premium: 1100, trial: 1300 },
      { name: "JAN", premium: 900, trial: 1200 },
      { name: "FEB", premium: 800, trial: 1100 },
    ],
    Quarterly: [
      { name: "Q1", premium: 2500, trial: 3000 },
      { name: "Q2", premium: 3000, trial: 1500 },
      { name: "Q3", premium: 3500, trial: 5000 },
      { name: "Q4", premium: 2000, trial: 5500 },
    ],
    "Half Yearly": [
      { name: "H1", premium: 6000, trial: 4000 },
      { name: "H2", premium: 7000, trial: 10000 },
    ],
    Yearly: [
      { name: "2021", premium: 8000, trial: 12000 },
      { name: "2022", premium: 10000, trial: 15000 },
      { name: "2023", premium: 12000, trial: 18000 },
      { name: "2024", premium: 15000, trial: 10000 },
    ],
  };

  const [selectedDuration, setSelectedDuration] = useState("Monthly");
  const [data, setData] = useState(dataSets[selectedDuration]);

  const handleDurationChange = (e) => {
    const duration = e.target.value;
    setSelectedDuration(duration);
    setData(dataSets[duration]);
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-white">Recurring Revenue</h2>
        <select
          className="p-2 text-white bg-gray-700 rounded"
          value={selectedDuration}
          onChange={handleDurationChange}
        >
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Half Yearly">Half Yearly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Bar dataKey="premium" fill="#8884d8" />
          <Bar dataKey="trial" fill="#82ca9d" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
