import React, { useContext } from "react";
import { useAuth, UserProvider } from "../context/UserContext";

const Profile = () => {
  const { authUser, logout } = useAuth();
  console.log(authUser);

  return (
    <section className="bgGradient min-h-screen flex flex-col justify-center items-center">
      <div className="shadow-lg rounded-3xl mx-auto w-full max-w-md bg-gray-900 p-8 text-gray-100">
        <p className="text-center text-2xl font-bold">Profile</p>
        <p className="mt-4 text-lg text-center">
          Welcome, <span className="font-semibold">{authUser?.email}</span>!
        </p>
        <button
          onClick={logout}
          className="mt-6 w-full bg-red-500 p-3 text-gray-900 font-semibold rounded-md"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Profile;
