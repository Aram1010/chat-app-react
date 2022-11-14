import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/chat" element={Chats} /> */}
      </Routes>
    </div>
  );
};

export default App;
