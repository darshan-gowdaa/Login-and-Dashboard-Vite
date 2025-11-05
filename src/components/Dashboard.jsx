import React from "react";
import StatsCard from "./StatsCard";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import InactiveTable from "./InactiveTable";
import BillingTable from "./BillingTable";
import { Bell, Moon, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-2 md:p-6 bg-black animate-fade-in">
      <div className="sticky z-10 flex flex-col md:flex-row items-center justify-between mb-8 bg-black top-6 animate-fade-in start-0 gap-4">
        <div className="w-full md:w-auto">
          <h1 className="text-2xl font-bold text-white">Welcome!</h1>
          <p className="mb-1 text-gray-400 ms-2">WhiteSpaces.AI</p>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search
              className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
              size={20}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 text-white transition-all duration-300 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button className="p-2 transition-all duration-300 bg-gray-800 rounded-full hover:bg-gray-700">
            <Bell size={20} className="text-white" />
          </button>
          <button className="p-2 transition-all duration-300 bg-gray-800 rounded-full hover:bg-gray-700">
            <Moon size={20} className="text-white" />
          </button>
          <div className="p-2 transition-all duration-300 bg-gray-800 rounded-full hover:bg-gray-700">
            <Link to="/profile">
              <User size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 animate-fade-in-up">
        <StatsCard
          title="Total Companies"
          value="323"
          iconType="companies"
          color="blue"
        />
        <StatsCard
          title="Premium Companies"
          value="89"
          iconType="premium"
          color="orange"
        />
        <StatsCard
          title="Companies on Trial"
          value="234"
          iconType="trial"
          color="blue"
        />
        <StatsCard
          title="Recurring Revenue"
          value="5400"
          iconType="revenue"
          color="orange"
        />
        <StatsCard
          title="Active Users"
          value="832"
          iconType="users"
          color="blue"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-fade-in-up">
        <LineChart />
        <BarChart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up">
        <InactiveTable />
        <BillingTable />
      </div>
    </div>
  );
};

export default Dashboard;
