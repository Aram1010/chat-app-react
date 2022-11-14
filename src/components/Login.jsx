import React from "react";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const Login = () => {
  return (
    <div className="flex items-center flex-col justify-evenly h-[100vh]">
      <h1 className="m-[5px] text-[25px]">Welcome back.</h1>
      <div className="flex flex-col">
        <button
          type="button"
          className="border-solid border-2 p-[10px] rounded-[50px] m-[3px]"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <FontAwesomeIcon icon={faGoogle} /> Sign In with Google
        </button>
        <button
          type="button"
          className="border-solid border-2 p-[10px] rounded-[50px]  m-[3px]"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FontAwesomeIcon icon={faFacebook} /> Sign In with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
