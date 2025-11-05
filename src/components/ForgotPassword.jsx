import React from "react";
import { Link } from "react-router-dom";

import { AuthLayout } from "./AuthContext";

export const ForgotPassword = () => {
  return (
    <AuthLayout
      title="Forgot Password"
      dividerLabel=" "
      footerText="Remember your password?"
      footerLinkText="Log in here"
      footerLinkTo="/login"
    >
      <p className="mb-6 text-lg text-center text-gray-400 animate-fade-in">
        Enter your registered email. We'll send a password reset link.
      </p>
      <form className="space-y-5 animate-fade-in">
        <div className="w-full">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 text-lg text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 md:text-base sm:text-sm"
          />
        </div>
        <button className="w-full p-3 text-lg font-semibold text-white bg-gray-600 rounded-lg hover:bg-gray-500 transition-all duration-300 md:text-base sm:text-sm">
          Submit
        </button>
      </form>
    </AuthLayout>
  );
};
