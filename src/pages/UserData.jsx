import React from "react";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const navigate = useNavigate();

  const handleGoToProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="min-h-screen bgGradient justify-center items-center">
      <div className="shadow-lg rounded-3xl mx-auto w-full max-w-md bg-gray-900 p-8 text-gray-100">
        <h1 className="text-center text-2xl font-bold mb-6">Home Page</h1>
        <p className="text-center mb-6">Welcome to the Home page</p>
        <button
          onClick={handleGoToProfile}
          className="w-full bg-blue-500 p-3 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
        >
          Go to Profile
        </button>
      </div>
    </div>
  );
};

export default UserData;
