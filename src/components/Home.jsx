import React from "react";
import { DataLayerContext } from "../context/Context";
import { Navbar, Chats } from "./";

const Home = () => {
  const { user } = DataLayerContext();

  return (
    <div className="">
      <Navbar user={user} />
      {user ? <Chats /> : null}
    </div>
  );
};

export default Home;
