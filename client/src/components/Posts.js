import React from "react";
import classes from "./Posts.module.scss";
import Post from "./Post";

function Posts({ posts }) {
  return (
    <section className={classes.container}>
      {posts.map((posts) => {
        return <Post posts={posts} key={posts._id} />;
      })}
    </section>
  );
}

export default Posts;

{
  /* <div className={classes.post}>
        <div className={classes.post_img}>
          <img src={postImage} alt="coding" />
        </div>
        <div className={classes.post_description}>
          <h2 className={classes.post_description_title}>Title</h2>
          <h3 className={classes.post_description_category}>Category</h3>
          <h4 className={classes.post_description_dates}>
            Date <span>time</span>
          </h4>
          <p className={classes.post_description_info}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            quisquam quaerat nihil commodi placeat maiores consequatur natus
            minima aut. Eaque harum ea dicta, explicabo sint minus unde aliquid?
            Consectetur, odit.
          </p>
        </div>
      </div> */
}
