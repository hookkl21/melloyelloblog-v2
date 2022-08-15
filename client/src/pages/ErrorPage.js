import React from "react";
import classes from "../style/Layout.module.scss";

export default function ErrorPage() {
  return (
    <div className={classes.container}>
      <h1>Error 404</h1>
      <p>Page not Found...</p>
    </div>
  );
}
