import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Navbar from "./components/UI/navigation/Navbar";

import { AuthContext } from "./context";

import "./styles/App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
