import React from "react";
import LoginComp from "../components/LoginComp";
import DbounceComp from "../components/Dbounce";

const Home = () => {
  return (
    <section className="grid grid-cols-1 min-h-screen bgGradient justify-center items-center">
      {/* <LoginComp /> */}
      <DbounceComp />
    </section>
  );
};

export default Home;
