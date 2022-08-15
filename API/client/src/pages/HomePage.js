import React, { useEffect, useState } from "react";
import { Header, Sidebar, Posts } from "../components";
import classes from "./Home.module.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function HomePage() {
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
    <div>
      <Header />
      <div className={classes.container}>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
