

import React from "react";

const AuthDivider = ({ label = "or" }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="w-full border-t border-gray-600"></div>
      </div>
      <div className="relative flex justify-center text-lg">
        <span className="px-3 text-gray-300 bg-gray-900/60 rounded-md relative z-10">
          {label}
        </span>
      </div>
    </div>
  );
};

export default AuthDivider;
import React from "react";

const AuthDivider = ({ label = "or" }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="w-full border-t border-gray-600"></div>
      </div>
      <div className="relative flex justify-center text-lg">
        <span className="px-3 text-gray-300 bg-gray-900/60 rounded-md relative z-10">
          {label}
        </span>
      </div>
    </div>
  );
};

export default AuthDivider;
