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

const Information = ({ value }) => {
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
              <h1 className="font-bold text-xl pl-8 ">
                {parseInt(value.data.list[0].main.feels_like - 273)}°C
              </h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaDroplet />
                Humidity
              </p>
              <h1 className="font-bold text-xl pl-8 ">
                {value.data.list[0].main.humidity}
              </h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaBolt />
                Wind Speed
              </p>
              <h1 className="font-bold text-xl pl-8 ">
                {value.data.list[0].wind.speed}
              </h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaFan />
                Temp Min
              </p>
              <h1 className="font-bold text-xl pl-8 ">
                {parseInt(value.data.list[0].main.temp_min - 273)}°C
              </h1>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaWind />
                Air Pressure
              </p>
              <h1 className="font-bold text-xl pl-8 ">
                {value.data.list[0].main.pressure}
              </h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaSun />
                Wind Degree
              </p>
              <h1 className="font-bold text-xl pl-8 ">
                {value.data.list[0].wind.deg}
              </h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaFire />
                Temp Max
              </p>
              <h1 className="font-bold text-xl pl-8 ">
                {parseInt(value.data.list[0].main.temp_max - 273)}°C
              </h1>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="flex items-center gap-2">
                <FaSmog />
                Gust
              </p>
              <h1 className="font-bold text-xl pl-8 ">
                {value.data.list[0].wind.gust}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
