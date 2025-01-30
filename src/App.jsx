import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import Cities from "./pages/Cities";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
