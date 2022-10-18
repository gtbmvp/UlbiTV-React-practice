import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import Button from "../button/Button";

import { AuthContext } from "../../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleClickLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link className={styles.link} to="/about">
          About
        </Link>
        <Link className={styles.link} to="/posts">
          Posts
        </Link>
      </div>

      {isAuth && <Button onClick={handleClickLogout}>Выйти</Button>}
    </div>
  );
};

export default Navbar;
