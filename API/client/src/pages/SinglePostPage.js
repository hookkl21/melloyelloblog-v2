import React from "react";
import classes from "./Single.module.scss";
import { SinglePost, Sidebar } from "../components";

function SinglePostPage() {
  return (
    <div className={classes.container}>
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default SinglePostPage;
