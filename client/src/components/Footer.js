import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_text}>
        <p>Copyright &copy 2022, All Rights Reserved</p>
      </div>
      <div className={classes.footer_icons}>
        <Link to="https://github.com/hookkl21">
          <FaGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/masaki-hook-600549239/">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
}
