import React, { useEffect, useState, useContext } from "react";
import logo from "../images/blog-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../context/Context";

import classes from "./Navbar.module.scss";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, dispatch } = useContext(Context);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  const loginHandler = () => {
    menuToggle();
    navigate("/login");
  };
  const logoutHandler = () => {
    menuToggle();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <header className={classes.navbar}>
      <div className={classes.navbar__content}>
        <Link className={classes.navbar__content__logo} to="/">
          <img src={logo} alt="MelloYello Blog" />
        </Link>
        <nav
          className={`${classes.navbar__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={menuToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" onClick={menuToggle}>
                About
              </Link>
            </li>
            <li>
              <Link to="posts" onClick={menuToggle}>
                Posts
              </Link>
            </li>
            <li>
              {user && (
                <Link to="write" onClick={menuToggle}>
                  Write
                </Link>
              )}
            </li>
            {/* <li>
              <Link to="contact" onClick={menuToggle}>
                Contact
              </Link>
            </li> */}
          </ul>
          {user === null ? (
            <button onClick={loginHandler}>Login</button>
          ) : (
            <button onClick={logoutHandler}>Logout</button>
          )}
        </nav>
        <div className={classes.navbar__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggle} />
          ) : (
            <AiOutlineClose onClick={menuToggle} />
          )}
        </div>
      </div>
    </header>
  );
}

// {
//   /* <h3>Login</h3> */
// }

export default Navbar;
