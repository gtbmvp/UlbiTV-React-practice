import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/posts");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <h1>Path does not exist</h1>;
};

export default ErrorPage;
