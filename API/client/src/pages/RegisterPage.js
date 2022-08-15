import React, { useState } from "react";
import classes from "./RegisterPage.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/login");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={classes.register}>
      <span className={classes.register_title}>Register</span>
      <form className={classes.register_form} onSubmit={handleSubmit}>
        <label>Username :</label>
        <input
          type="text"
          placeholder="Username"
          className={classes.register_form_input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email :</label>
        <input
          type="email"
          placeholder="Email"
          className={classes.register_form_input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          className={classes.register_form_input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={classes.register_form_button} type="submit">
          Register
        </button>
      </form>
      <p>Already have an account? Click login.</p>
      <button onClick={clickHandler} className={classes.register_login}>
        Login
      </button>
      {error && (
        <p style={{ color: "red" }}>
          Username or Email already exist in the system!
        </p>
      )}
    </div>
  );
}

export default RegisterPage;
