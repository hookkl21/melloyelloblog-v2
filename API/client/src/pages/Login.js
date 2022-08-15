import React, { useContext, useRef } from "react";
import classes from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/register");
  };

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL" });
    }
  };

  return (
    <div className={classes.login}>
      <span className={classes.login_title}>Login</span>
      <form className={classes.login_form} onSubmit={handleSubmit}>
        <label>Username :</label>
        <input
          type="text"
          placeholder="Username"
          className={classes.login_form_input}
          ref={userRef}
        />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          className={classes.login_form_input}
          ref={passwordRef}
        />
        <button
          className={classes.login_form_button}
          type="submit"
          disabled={isFetching}
        >
          Login
        </button>
      </form>
      <p>Don't Have an account? Click Register.</p>
      <button onClick={clickHandler} className={classes.login_register}>
        Register
      </button>
    </div>
  );
}

export default Login;
