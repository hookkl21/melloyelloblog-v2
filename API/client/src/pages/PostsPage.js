import React, { useState, useEffect } from "react";
import classes from "./PostsPage.module.scss";
import { Sidebar, Posts } from "../components";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetchPosts();
  }, [search]);

  const fetchPosts = async () => {
    const res = await axios.get("/posts" + search);
    const data = res.data;
    setPosts(data);
  };
  return (
    <div className={classes.container}>
      <Posts posts={posts} key={posts._id} />
      <Sidebar />
    </div>
  );
}
