import React from "react";

import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import Cities from "./components/Cities";
import CurrentLocation from "./components/CurrentLocation";
import { CityListProvider } from "./components/CitiesListContext";
const App = () => {
  return (
    <>
      <CityListProvider>
        <Routes>
          <Route path="/" element={<CurrentLocation />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CityListProvider>
    </>
  );
};

export default App;
