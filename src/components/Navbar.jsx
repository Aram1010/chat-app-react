import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const signOut = async () => {
    await auth.signOut();

    navigate("/");
  };

  console.log(user._delegate)

  return (
    <div>
      <div className=""></div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Navbar;
