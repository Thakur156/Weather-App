import React from "react";
import {
  FaBolt,
  FaDroplet,
  FaFan,
  FaFire,
  FaSmog,
  FaSun,
  FaTemperatureQuarter,
  FaWind,
} from "react-icons/fa6";

const Information = () => {
  return (
    <>
      <div className="basis-6/12 bg-gray-800 rounded-3xl p-5 mt-2">
        <h1 className="font-bold p-4  ">Important Information</h1>
        <div className="flex justify-around h-5/6 mt-2">
          <div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaTemperatureQuarter />
                Real Feel
              </p>
              <h1 className="font-bold text-xl pl-8 ">21°C</h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaDroplet />
                Real Feel
              </p>
              <h1 className="font-bold text-xl pl-8 ">21°C</h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaBolt />
                Real Feel
              </p>
              <h1 className="font-bold text-xl pl-8 ">21°C</h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaFan />
                Real Feel
              </p>
              <h1 className="font-bold text-xl pl-8 ">21°C</h1>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaWind />
                Real Feel
              </p>
              <h1 className="font-bold text-xl pl-8 ">21°C</h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaSun />
                Real Feel
              </p>
              <h1 className="font-bold text-xl pl-8 ">21°C</h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaFire />
                Real Feel
              </p>
              <h1 className="font-bold text-xl pl-8 ">21°C</h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaSmog />
                Real Feel
              </p>
              <h1 className="font-bold text-xl pl-8 ">21°C</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
