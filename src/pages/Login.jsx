import React, { useContext } from "react";

import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";

import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleClickLogin = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div className="login__wrapper">
      <h1>Login page</h1>
      <form className="login__form" onSubmit={handleClickLogin}>
        <Input type="text" name="login" placeholder="Login" />
        <Input type="password" name="password" placeholder="Password" />
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default Login;
