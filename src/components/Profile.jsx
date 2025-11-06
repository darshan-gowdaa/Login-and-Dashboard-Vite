import React from "react";
import { User, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white dark:bg-gray-900 animate-fade-in">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </button>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Account
            </h1>
          </div>
        </div>

        <div className="p-4 md:p-6 bg-white rounded-lg dark:bg-gray-800 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            {/* Left side - Avatar and Info */}
            <div className="w-full lg:w-1/4 mt-10 lg:mt-20 flex flex-col items-center">
              <div className="mb-4">
                <div className="flex items-center justify-center w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="text-4xl text-gray-400 dark:text-gray-300">
                    <User size={70} />
                  </div>
                </div>
              </div>
              <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
                Allowed *.jpeg, *.jpg, *.png, *.gif
              </p>
              <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400">
                Max size of 6.9 MB
              </p>
              <div className="flex items-center mb-4">
                <span className="mr-2 text-sm dark:text-gray-300">
                  Public Profile
                </span>
                <button
                  className="relative w-12 h-6 bg-gray-300 rounded-full dark:bg-gray-600"
                  role="switch"
                >
                  <span className="absolute w-4 h-4 bg-white rounded-full left-1 top-1"></span>
                </button>
              </div>
              <button className="w-full px-4 py-2 text-white bg-red-500 rounded-lg transition-all duration-300 hover:bg-red-600">
                Delete User
              </button>
            </div>

            {/* Right side - Form */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter Your Username"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="+91 999999999"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter address"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Code
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter Postal code"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    About
                  </label>
                  <textarea
                    className="w-full h-32 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button className="px-6 py-2 text-white bg-blue-700 rounded-lg dark:bg-blue-800 transition-all duration-300 hover:bg-blue-900">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
