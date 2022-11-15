import React from "react";
import { DataLayerContext } from "../context/Context";
import { Navbar, Chats } from "./";

const Home = () => {
  const { user } = DataLayerContext();

  return (
    <div>
      <Navbar user={user} />
      <Chats />
    </div>
  );
};

export default Home;
