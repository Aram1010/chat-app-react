import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Context = React.createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let isRender = false;

    const handle = async () => {
      await setTimeout(1000);

      if (!isRender) {
        auth.onAuthStateChanged((user) => {
          setUser(user);
          setLoading(false);
          if (user) navigate("/home");
        });
      }
    };

    handle();

    return () => {
      isRender = true;
    };
  }, [user, navigate]);

  const value = { user };

  return (
    <Context.Provider value={value}>{!loading && children}</Context.Provider>
  );
};

export const DataLayerContext = () => useContext(Context);
