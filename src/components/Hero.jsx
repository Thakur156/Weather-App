import React from "react";
import Information from "./Information";

const Hero = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="basis-5/12 p-5 pt-12 relative">
        <img
          className="w-44 h-44 absolute top-1/5 md:right-1/4 right-2 top-14 mt-3"
          src="../src/assets/images/sun.svg"
        />
        <div className="flex gap-5">
          <h1 className="font-bold text-5xl mb-1">Paju</h1>
          <button className="w-10 h-10 rounded-2xl text-white mt-2">
            <img src="../src/assets/images/addbtn.svg"></img>
          </button>
        </div>
        <span>broken clouds</span>
        <h1 className="font-bold text-6xl mt-10">21°C</h1>
      </div>
      <Information />
    </div>
  );
};

export default Hero;
