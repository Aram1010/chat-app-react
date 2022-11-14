import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Context = React.createContext();

export const DataLayerContext = () => useContext(Context);

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      navigate("/chats");
    });
  }, [user, navigate]);

  const value = { user }

  return (
    <DataLayerContext.Provider value={value}>
        {!loading && children}
    </DataLayerContext.Provider>
  )
};
