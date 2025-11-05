import React from 'react';
import { TrendingUp, Users, Star, FileCheck, DollarSign } from 'lucide-react';

const iconMap = {
  companies: TrendingUp,
  premium: Star,
  trial: FileCheck,
  revenue: DollarSign,
  users: Users,
};

const StatsCard = ({ title, value, iconType, color = 'white' }) => {
  const Icon = iconMap[iconType] || TrendingUp;

  return (
    <div className={`bg-gray-600 bg-opacity-10 backdrop-blur-lg p-6 rounded-xl animate-fade-in transition-all duration-300 hover:scale-105`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-200 text-sm mb-2">{title}</h3>
          <p className="text-white text-2xl font-bold">{value}</p>
        </div>
        <Icon className={`w-8 h-8 ${color === 'white' ? 'text-primary-blue' : 'text-primary-orange'}`} />
      </div>
    </div>
  );
};

export default StatsCard;