import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Home } from "./components";

import { DataProvider } from "./context/Context";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </DataProvider>
    </div>
  );
};

export default App;
