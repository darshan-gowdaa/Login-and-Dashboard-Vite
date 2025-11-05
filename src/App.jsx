import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { Login} from "./components/Login";
import { ForgotPassword } from "./components/ForgotPassword";
import { SignUp } from "./components/SignUp";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const location = useLocation();
  const showSidebar =
    isAuthenticated && (location.pathname === "/dashboard" || location.pathname === "/profile");

  return (
    <div className="flex h-screen bg-gray-900">
      {showSidebar && <Sidebar />}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
