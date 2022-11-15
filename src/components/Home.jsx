import React from "react";
import { DataLayerContext } from "../context/Context";
import { Navbar, Chats } from "./";

const Home = () => {
  const { user } = DataLayerContext();

  return (
    <div className="h-[100vh]">
      <Navbar user={user} />
      <Chats />
    </div>
  );
};

export default Home;
