import React from "react";
import Information from "./Information";
import Geturl from "./Geturl";

const Hero = ({ value }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="basis-5/12 p-5 pt-12 relative">
        <img
          className="w-44 h-44 absolute top-1/5 md:right-1/4 right-2 top-14 mt-3"
          src={Geturl(value.data.list[0].weather[0].icon)}
        />
        <div className="flex gap-5">
          <h1 className="font-bold text-5xl mb-1">{value.data.city.name}</h1>
          <button className="w-10 h-10 rounded-2xl text-white mt-2">
            <img src="../src/assets/images/addbtn.svg"></img>
          </button>
        </div>
        <span>{value.data.list[0].weather[0].description}</span>
        <h1 className="font-bold text-6xl mt-10">
          {parseInt(value.data.list[0].main.temp - 273)}°C
        </h1>
      </div>
      <Information value={value} />
    </div>
  );
};

export default Hero;
