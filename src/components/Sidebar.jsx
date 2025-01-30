import React from "react";
import "../Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className=" sidebar flex  md:flex-col md:items-center md:justify-center w-full h-24 md:h-[80vh] md:w-28 md:rounded-3xl md:mx-6 md:mt-20 md:p-5 bg-gray-800 text-white">
        <div className="basis-1/6 m-2 ">
          <Link to="/">
            <img src="../src/assets/images/home.png" alt="Home" />
            Home
          </Link>
        </div>
        <div className="basis-1/6 m-2 ">
          <Link to="/cities">
            <img src="../src/assets/images/cities.png" alt="Cities" />
            Cities
          </Link>
        </div>
        <div className="basis-1/6 m-2 ">
          <Link to="/">
            <img src="../src/assets/images/forecast.png" alt="Forecast" />
            Forecast
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
