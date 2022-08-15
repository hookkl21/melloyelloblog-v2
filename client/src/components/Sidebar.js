import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.scss";

function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get("/categories");
    const data = res.data;
    setCategories(data);
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_items}>
        <h3 className={classes.sidebar_items_categories}>Categories</h3>
        <section className={classes.sidebar_items}>
          <h4 className={classes.sidebar_items_subtitle}>Front-End</h4>
          <ul className={classes.sidebar_items_lists}>
            {categories.map((c) => {
              return (
                <Link
                  className="link"
                  to={`/?categories=${c.categoryName}`}
                  key={c._id}
                >
                  <li className={classes.sidebar_items_lists_item}>
                    {c.categoryName}
                  </li>
                </Link>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
