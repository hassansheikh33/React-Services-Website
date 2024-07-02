import classes from "./Header.module.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.navItem}>
        <h1 className={classes.navLogo}>React Services</h1>
      </Link>
      <div className={classes.navMenu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${classes.navItem} ${classes.active}`
              : `${classes.navItem}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive
              ? `${classes.navItem} ${classes.active}`
              : `${classes.navItem}`
          }
        >
          Team
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? `${classes.navItem} ${classes.active}`
              : `${classes.navItem}`
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? `${classes.navItem} ${classes.active}`
              : `${classes.navItem}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? `${classes.navItem} ${classes.active}`
              : `${classes.navItem}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${classes.navItem} ${classes.active}`
              : `${classes.navItem}`
          }
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}
