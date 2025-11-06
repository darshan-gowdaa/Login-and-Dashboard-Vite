import React, { useState, useRef, useEffect } from "react";
import StatsCard from "./StatsCard";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import InactiveTable from "./InactiveTable";
import BillingTable from "./BillingTable";
import { Bell, Moon, Search, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Dashboard = ({ setMobileSidebarOpen }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [ringing, setRinging] = useState(false);
  const searchRef = useRef(null);

  // autofocus when search is toggled open on mobile
  useEffect(() => {
    if (showSearch) {
      // small timeout to ensure element is rendered
      setTimeout(() => searchRef.current && searchRef.current.focus(), 50);
    }
  }, [showSearch]);

  // close search on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && showSearch) setShowSearch(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showSearch]);
  return (
    // add small horizontal padding on mobile and keep md padding
    <div className="min-h-screen px-4 bg-dashboard-gradient md:p-6">
      <div className="sticky top-0 left-0 z-10 flex flex-row items-center justify-between h-12 gap-2 px-3 mb-4 bg-gradient md:h-auto md:px-0 animate-slide-left">
        {/** Left title */}
        <div className="flex items-center">
          <div>
            <h1 className="text-lg font-bold text-white md:text-2xl">
              Welcome!
            </h1>
            <p className="hidden mb-1 text-gray-400 md:block ms-2">
              WhiteSpaces.AI
            </p>
          </div>
        </div>

        {/** Right controls: search icon + input, notifications (md+), profile and menu (menu only on mobile) */}
        <div className="relative flex items-center w-auto space-x-2 md:space-x-4">
          {/* search toggle - hidden on md+ to avoid duplicate icon */}
          <button
            onClick={() => setShowSearch((s) => !s)}
            className={`p-2 rounded-full hover:bg-gray-800 md:hidden transform transition-transform duration-200 ${
              showSearch ? "rotate-90" : ""
            }`}
            aria-label="Toggle search"
          >
            {showSearch ? (
              <X size={18} className="text-white" />
            ) : (
              <Search size={18} className="text-gray-300" />
            )}
          </button>

          <div
            className={`relative ${showSearch ? "block" : "hidden"} md:block`}
          >
            {/* desktop input (visible md+) or toggled on mobile */}
            <input
              type="text"
              placeholder="Search..."
              ref={searchRef}
              className="w-48 py-1 pl-8 pr-3 text-white transition-all duration-300 bg-gray-800 rounded-lg md:w-64 md:py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <Search
              className="absolute text-gray-400 transform -translate-y-1/2 left-2 top-1/2"
              size={16}
            />
          </div>

          <button
            className={`p-2 transition-all duration-300 bg-gray-800 rounded-full hover:bg-gray-700 hidden md:inline-flex ${
              ringing ? "text-yellow-400 animate-shake" : "text-white"
            }`}
            onClick={() => setRinging((r) => !r)}
            aria-pressed={ringing}
            aria-label="Notifications"
          >
            <Bell size={18} />
          </button>
          <button className="hidden p-2 transition-all duration-300 bg-gray-800 rounded-full hover:bg-gray-700 md:inline-flex">
            <Moon size={18} className="text-white" />
          </button>

          {/* profile then hamburger on the right (hamburger only visible on mobile) */}
          <div className="p-2 transition-all duration-300 bg-gray-800 rounded-full hover:bg-gray-700">
            <Link to="/profile">
              <User size={18} className="text-white" />
            </Link>
          </div>

          <button
            className="p-2 transition-all duration-300 bg-gray-800 rounded-full hover:bg-gray-700 md:hidden"
            onClick={() => setMobileSidebarOpen && setMobileSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} className="text-white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3 lg:grid-cols-5 animate-slide-right">
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

      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 animate-scale-in">
        <LineChart />
        <BarChart />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 animate-slide-up">
        <InactiveTable />
        <BillingTable />
      </div>
    </div>
  );
};

export default Dashboard;
