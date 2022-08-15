import React, { useContext, useState } from "react";
import classes from "./WritePage.module.scss";
import { FaPlus } from "react-icons/fa";
import image from "../images/coding.jpg";
import axios from "axios";
import { Context } from "../context/Context";
import { Navigate, useNavigate } from "react-router-dom";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const { user } = useContext(Context);
  // console.log(user.username);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
      // categories,
    };

    //when there is photo/image uploaded
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
        navigate("*");
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/posts/" + res.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.write}>
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt=""
          className={classes.write_img}
        />
      )}
      <form className={classes.write_form} onSubmit={handleSubmit}>
        <div className={classes.write_form_groups}>
          <label htmlFor="fileInput">
            <FaPlus className={classes.write_form_groups_icon} />
          </label>
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            className={classes.write_form_groups_fileInput}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            name="text"
            placeholder="Title"
            className={classes.write_form_groups_title}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <input
            type="text"
            name="categories"
            placeholder="Categories"
            className={classes.write_form_groups_title}
            autoFocus={true}
            onChange={(e, p) =>
              setCategories((prev) => prev.concat(e.target.value))
            }
          /> */}
        </div>
        <div className={classes.write_form_group}>
          <textarea
            type="text"
            placeholder="Tell your story..."
            className={classes.write_form_group_textarea}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}
