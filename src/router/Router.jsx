import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { publicRoutes, privateRoutes } from "./routes";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";

import { AuthContext } from "../context";

const Router = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default Router;
