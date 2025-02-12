import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const handleGoToProfile = () => {
    navigate("/profile");
  };

  return (
    <div>
      <button onClick={handleGoToProfile} className="">
        Go to Profile
      </button>
    </div>
  );
};

export default Home;
