import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { notify } from "./Toast";
import { AuthLayout } from "./AuthContext";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (field === "email") {
        passwordRef.current.focus();
      } else if (field === "password") {
        confirmPasswordRef.current.focus();
      } else if (field === "confirmPassword") {
        handleSignUp(e);
      }
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      notify.error("Passwords don't match!");
    } else if (email && password) {
      navigate("/dashboard");
    } else {
      notify.error("Please fill out all fields!");
    }
  };

  return (
    <AuthLayout
      title="Sign Up"
      socialLabel="Sign up with Google"
      dividerLabel="or sign up with"
      footerText="Already have an account?"
      footerLinkText="Log in here"
      footerLinkTo="/login"
    >
      <form className="space-y-5 animate-fade-in" onSubmit={handleSignUp}>
        <div className="w-full">
          <input
            type="email"
            placeholder="Email Address"
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

        <div className="w-full">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "confirmPassword")}
            ref={confirmPasswordRef}
            className="w-full p-3 text-lg text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 md:text-base sm:text-sm"
          />
        </div>

        <button className="w-full p-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-300 md:text-base sm:text-sm">
          Sign Up
        </button>
      </form>
    </AuthLayout>
  );
};
