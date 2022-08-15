import React, { useContext, useEffect, useState } from "react";
import classes from "./SinglePost.module.scss";
import image from "../images/coding.jpg";
import { FaEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/Context";

function SinglePost() {
  //declare state
  const [singlePost, setSinglePost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  //Getting the ID for specific post
  const location = useLocation();
  //in 3rd element, there is objectID from DB
  const path = location.pathname.split("/")[2];
  //fetching the single post data
  useEffect(() => {
    fetchSinglePost();
  }, [path]);
  const fetchSinglePost = async () => {
    const res = await axios.get(`/posts/${path}`);
    const data = res.data;
    setSinglePost(data);
    setTitle(data.title);
    setDescription(data.description);
  };

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + path, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false);
    } catch (error) {}
  };

  const PF = "http://localhost:8000/images/";

  return (
    <div className={classes.singlePost}>
      <div className={classes.singlePost_wrapper}>
        {singlePost.photo && (
          <img
            src={PF + singlePost.photo}
            alt=""
            className={classes.singlePost_wrapper_img}
          />
        )}
        <section className={classes.singlePost_wrapper_titleSection}>
          {updateMode ? (
            <input
              type="text"
              value={title}
              className={classes.singlePost_wrapper_titleSection_titleUpdate}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <>
              <h1 className={classes.singlePost_wrapper_titleSection_title}>
                {title}
              </h1>
              <div className={classes.singlePost_wrapper_titleSection_icons}>
                {singlePost.username === user?.username && (
                  <>
                    <FaEdit
                      className={
                        classes.singlePost_wrapper_titleSection_icons_icon
                      }
                      style={{ color: "blueviolet" }}
                      onClick={() => setUpdateMode(true)}
                    />
                    <FiDelete
                      className={
                        classes.singlePost_wrapper_titleSection_icons_icon
                      }
                      style={{ color: "red" }}
                      onClick={handleDelete}
                    />
                  </>
                )}
              </div>
            </>
          )}
        </section>
        <section className={classes.singlePost_wrapper_titleSection_info}>
          <span>
            <Link to={`/?user=${singlePost.username}`} className="link">
              Author : <b>{singlePost.username}</b>
            </Link>
          </span>
          <span>{new Date(singlePost.createdAt).toDateString()}</span>
        </section>
        <div className={classes.singlePost_wrapper_body}>
          {updateMode ? (
            <textarea
              value={description}
              className={classes.singlePost_wrapper_body_description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          ) : (
            <p>{description}</p>
          )}
        </div>
        {updateMode && <button onClick={handleUpdate}>Update</button>}
      </div>
    </div>
  );
}

export default SinglePost;
