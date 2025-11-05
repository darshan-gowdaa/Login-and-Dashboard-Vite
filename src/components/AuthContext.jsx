import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.jpeg";

// Context
const AuthContext = createContext(null);

// Divider
const AuthDivider = ({ label = "or" }) => (
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

// Layout
const AuthLayout = ({
  title,
  socialLabel,
  dividerLabel = "or",
  footerText,
  footerLinkText,
  footerLinkTo,
  children,
}) => (
  <div className="relative flex items-center justify-center min-h-screen p-6">
    <div
      className="absolute inset-0 bg-center bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
        filter: "brightness(50%)",
      }}
    ></div>
    <div
      className="relative w-full max-w-md p-8 rounded-lg shadow-xl bg-opacity-60 animate-slide-up backdrop-blur-lg"
      style={{ filter: "brightness(100%)" }}
    >
      <h1 className="mb-6 text-3xl font-bold text-center text-white">
        {title}
      </h1>
      {socialLabel && (
        <button className="flex items-center justify-center w-full gap-3 p-3 mb-6 text-white bg-gray-900 rounded-lg hover:bg-gray-800">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-6 h-6"
          />
          {socialLabel}
        </button>
      )}
      <AuthDivider label={dividerLabel} />
      {children}
      {footerText && (
        <p className="mt-6 text-lg text-center text-gray-400">
          {footerText}{" "}
          <Link to={footerLinkTo} className="text-blue-400 hover:underline">
            {footerLinkText}
          </Link>
        </p>
      )}
    </div>
  </div>
);

// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthLayout, AuthDivider };
