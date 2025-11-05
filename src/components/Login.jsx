import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { notify } from "./Toast";
import { AuthLayout } from "./AuthContext";

export const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();
  const passwordRef = React.useRef();

  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (field === "email") {
        passwordRef.current.focus();
      } else if (field === "password") {
        handleLogin(e);
      }
    }
  };

  useEffect(() => {
    // Show info toast for 5 seconds on mount
    notify.info("Use ' admin '  as username and password to login.", {
      autoClose: 5000,
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      toastId: "login-admin-info",
      dangerouslyAllowHtml: true,
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "admin") {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      notify.error("Invalid credentials! Try again.");
    }
  };

  return (
    <AuthLayout
      title="Login"
      socialLabel="Continue with Google"
      dividerLabel="or sign in with"
      footerText="Don't have an account?"
      footerLinkText="Sign up here"
      footerLinkTo="/signup"
    >
      <form className="space-y-5 animate-fade-in" onSubmit={handleLogin}>
        <div className="w-full">
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "email")}
            autoFocus
            className="w-full p-3 text-lg text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 md:text-base sm:text-sm"
          />
        </div>

        <div className="w-full">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "password")}
            ref={passwordRef}
            className="w-full p-3 text-lg text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 md:text-base sm:text-sm"
          />
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-white">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="text-lg sm:text-base">Keep me signed in</span>
          </label>
          <Link
            to="/forgot-password"
            className="text-lg sm:text-base text-blue-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button className="w-full p-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-300 md:text-base sm:text-sm">
          Login
        </button>
      </form>
    </AuthLayout>
  );
};
