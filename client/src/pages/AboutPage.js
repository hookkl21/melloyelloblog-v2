import React from "react";
import classes from "./About.module.scss";
import image from "../images/profile.jpg";

export default function AboutPage() {
  return (
    <div className={classes.about}>
      <h1>About Me</h1>
      <hr />
      <section className={classes.about_card}>
        <div className={classes.about_card_image}>
          <img src={image} alt="" />
        </div>
        <div className={classes.about_card_describe}>
          <h3>
            My Name Is <span>Masaki Hook</span>
          </h3>
          <p>
            I am a self-taught front-end developer who loves to learn new
            technological advancement and improve my technical skills. I have
            created this blog site hoping to share my knowledge, and hone in my
            skills in the future. I am no expert on technical skills, however, I
            am hoping to share some tips and tricks while I am learning the
            technical skills so everyone can benefit from this blog posts.
            Please feel free to reach out to me through contact page. You are
            more than welcome to ask, teach, share, or anything that would help
            me improve myself or this site. Hope to speak to you soon! :D
          </p>
        </div>
      </section>
    </div>
  );
}
