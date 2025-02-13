import React from "react";

// const Button = document.getElementsByClassName("btn");

const DbounceClick = () => {};

const DbounceComp = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <button
          onClick={(e) => {
            console.log("Clicked");
          }}
          className="btn p-4 bg-lime-700 rounded-xl"
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default DbounceComp;
