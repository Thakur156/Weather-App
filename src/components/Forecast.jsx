import React from "react";
import Geturl from "./Geturl";
const Forecast = ({ value }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <>
      <div className="md:mt-14 h-auto  p-6 bg-gray-800 rounded-3xl">
        <h1 className="font-bold text-xl mb-4 ">6 Days Forecast</h1>

        <div className="flex justify-between items-center my-4 p-2">
          <div className="flex w-3/4 justify-between">
            <p>{weekday[new Date(value.data.list[0].dt_txt).getDay()]}</p>
            <div className="flex w-2/4 justify-between items-center">
              <img
                className="w-8 h-8"
                src={Geturl(value.data.list[0].weather[0].icon)}
              />
              <p>{value.data.list[0].weather[0].main}</p>
            </div>
          </div>
          <p>{parseInt(value.data.list[0].main.temp - 273)}°C</p>
        </div>

        <hr className="border-solid border-gray-600 my-4" />
        <div className="flex justify-between items-center my-4 p-2">
          <div className="flex w-3/4 justify-between">
            <p>{weekday[new Date(value.data.list[7].dt_txt).getDay()]}</p>
            <div className="flex w-2/4 justify-between items-center">
              <img
                className="w-8 h-8"
                src={Geturl(value.data.list[7].weather[0].icon)}
              />
              <p>{value.data.list[7].weather[0].main}</p>
            </div>
          </div>
          <p>{parseInt(value.data.list[7].main.temp - 273)}°C</p>
        </div>

        <hr className="border-solid border-gray-600 my-4" />

        <div className="flex justify-between items-center my-4 p-2">
          <div className="flex w-3/4 justify-between">
            <p>{weekday[new Date(value.data.list[13].dt_txt).getDay()]}</p>
            <div className="flex w-2/4 justify-between items-center">
              <img
                className="w-8 h-8"
                src={Geturl(value.data.list[13].weather[0].icon)}
              />
              <p>{value.data.list[13].weather[0].main}</p>
            </div>
          </div>
          <p>{parseInt(value.data.list[13].main.temp - 273)}°C</p>
        </div>

        <hr className="border-solid border-gray-600 my-4" />

        <div className="flex justify-between items-center my-4 p-2">
          <div className="flex w-3/4 justify-between">
            <p>{weekday[new Date(value.data.list[21].dt_txt).getDay()]}</p>
            <div className="flex w-2/4 justify-between items-center">
              <img
                className="w-8 h-8"
                src={Geturl(value.data.list[21].weather[0].icon)}
              />
              <p>{value.data.list[21].weather[0].main}</p>
            </div>
          </div>
          <p>{parseInt(value.data.list[21].main.temp - 273)}°C</p>
        </div>

        <hr className="border-solid border-gray-600 my-4" />

        <div className="flex justify-between items-center my-4 p-2">
          <div className="flex w-3/4 justify-between">
            <p>{weekday[new Date(value.data.list[29].dt_txt).getDay()]}</p>
            <div className="flex w-2/4 justify-between items-center">
              <img
                className="w-8 h-8"
                src={Geturl(value.data.list[29].weather[0].icon)}
              />
              <p>{value.data.list[29].weather[0].main}</p>
            </div>
          </div>
          <p>{parseInt(value.data.list[29].main.temp - 273)}°C</p>
        </div>

        <hr className="border-solid border-gray-600 my-4" />

        <div className="flex justify-between items-center my-4 p-2">
          <div className="flex w-3/4 justify-between">
            <p>{weekday[new Date(value.data.list[37].dt_txt).getDay()]}</p>
            <div className="flex w-2/4 justify-between items-center">
              <img
                className="w-8 h-8"
                src={Geturl(value.data.list[37].weather[0].icon)}
              />
              <p>{value.data.list[37].weather[0].main}</p>
            </div>
          </div>
          <p>{parseInt(value.data.list[37].main.temp - 273)}°C</p>
        </div>

        <hr className="border-solid border-gray-600 my-4" />
      </div>
    </>
  );
};

export default Forecast;
