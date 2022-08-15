import React from "react";
import classes from "./Header.module.scss";
import coding from "../images/green.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const postsHandler = () => {
    navigate("/posts");
  };
  return (
    <div className={classes.header}>
      <div className={classes.header_title}>
        <span>Front-End & Lawn</span>
        <span>Blog</span>
      </div>
      <div className={classes.header_sections}>
        <section className={classes.header_sections_section1}>
          <h1>
            Blogs where you share your knowledge about Front-End and Your Lawn.
            <br />A community where we learn together...
          </h1>
        </section>
        <section className={classes.header_sections_section2}>
          <p>See what you can learn</p>
          <button onClick={postsHandler}>Explore!</button>
        </section>
      </div>
    </div>
  );
}
