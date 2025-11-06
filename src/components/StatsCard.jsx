import React from "react";
import { TrendingUp, Users, Star, FileCheck, DollarSign } from "lucide-react";

const iconMap = {
  companies: TrendingUp,
  premium: Star,
  trial: FileCheck,
  revenue: DollarSign,
  users: Users,
};

const StatsCard = ({ title, value, iconType, color = "white" }) => {
  const Icon = iconMap[iconType] || TrendingUp;

  return (
    <div className="stats-card-glass relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-xl"></div>
      <div className="relative flex justify-between items-center p-6">
        <div>
          <h3 className="text-gray-300 text-sm mb-2 font-medium">{title}</h3>
          <p className="text-white text-2xl font-bold">{value}</p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-transparent rounded-full filter blur-sm transform group-hover:scale-110 transition-all duration-300"></div>
          <Icon
            className={`w-8 h-8 relative ${
              color === "white" ? "text-primary-blue" : "text-primary-orange"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
