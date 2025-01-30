import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Forecast from "../components/Forecast";
import Hero from "../components/Hero";
import axios from "axios";

const Home = ({ location }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=ebfe154d3fe337f02e40b43787701606`.then(
        (value) => {
          setValue = value;
          console.log(value);
        }
      )
    );
  }, []);

  return (
    <>
      <div className="flex md:flex-row flex-col h-auto  bg-black">
        <div className="md:basis-1/12 h-full">
          <Sidebar />
        </div>
        <div className="md:basis-7/12 flex flex-col text-white mx-5">
          <form className="flex justify-between items-center">
            <input
              className="bg-gray-800 w-full mt-6 p-5 rounded-3xl focus:outline-none"
              type="text"
              placeholder="See Default City"
            />
            <img
              src="../src/assets/images/currentLocation.svg"
              className="h-16 w-16 mt-6 p-3"
              alt="Current Location"
            />
          </form>
          <Hero />
        </div>
        <div className="md:basis-4/12 m-6 text-white">
          <Forecast />
        </div>
      </div>
    </>
  );
};

export default Home;
