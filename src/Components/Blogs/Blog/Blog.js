import React from "react";
import classes from "./Blog.module.css";
import { Link } from "react-router-dom";

export default function Blog(props) {
  return (
    <div className={classes.col1box1 + " " + classes.box}>
      <img className={classes.image} src={props.src} alt={props.alt} />
      <div className={classes.imgText}>
        <p className={classes.date}>July 2, 2024</p>
        <div className={classes.bottomText}>
          <h2>The Decorated Ways</h2>
          <p>Dive into minimalism</p>
          <Link className={classes.link} href="#">
            <p>Read More</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.75 12.5L10.25 8L5.75 3.5"
                stroke="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
