import React, { useState } from "react";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const LineChart = () => {

  const dataSets = {
    Monthly: [
      { name: "Sep", premium: 95, trial: 75 },
      { name: "Oct", premium: 75, trial: 90 },
      { name: "Nov", premium: 50, trial: 110 },
      { name: "Dec", premium: 85, trial: 60 },
      { name: "Jan", premium: 69, trial: 234 },
    ],
    Quarterly: [
      { name: "Q1", premium: 200, trial: 300 },
      { name: "Q2", premium: 250, trial: 350 },
      { name: "Q3", premium: 300, trial: 400 },
      { name: "Q4", premium: 350, trial: 450 },
    ],
    "Half Yearly": [
      { name: "H1", premium: 900, trial: 200 },
      { name: "H2", premium: 600, trial: 800 },
    ],
    Yearly: [
      { name: "2021", premium: 1900, trial: 1100 },
      { name: "2022", premium: 1800, trial: 1300 },
      { name: "2023", premium: 1200, trial: 1500 },
      { name: "2024", premium: 1500, trial: 1800 },
    ],
  };

  const [selectedDuration, setSelectedDuration] = useState("Monthly");
  const [data, setData] = useState(dataSets[selectedDuration]);

  const handleDurationChange = (event) => {
    const duration = event.target.value;
    setSelectedDuration(duration);
    setData(dataSets[duration]);
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-white">Companies</h2>
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
      <RechartsLineChart
        data={data}
        width={500}
        height={300}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Line type="monotone" dataKey="premium" stroke="#8884d8" />
        <Line type="monotone" dataKey="trial" stroke="#82ca9d" />
      </RechartsLineChart>
    </div>
  );
};

export default LineChart;