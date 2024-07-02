import React from "react";
import classes from "./Blogs.module.css";
import Blog from "./Blog/Blog";

export default function Blogs() {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1 className={classes.blogs}>Blogs</h1>
        <p className={classes.blogText}>These are our Blogs</p>
      </div>
      <div className={classes.blogContainer}>
        <div className={classes.col1}>
          <div className={classes.col1upper}>
            <Blog src="https://i.ibb.co/DYxtCJq/img-1.png" alt="chair" />
            <Blog src="https://i.ibb.co/3C5HvxC/img-2.png" alt="wall design" />
          </div>
          <Blog src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" />
        </div>
        <div className={classes.col2}>
          <Blog src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" />
          <div className={classes.col2lower}>
            <Blog src="https://i.ibb.co/3yvZBpm/img-5.png" alt="chair" />
            <Blog src="https://i.ibb.co/gDdnJb5/img-6.png" alt="wall design" />
          </div>
        </div>
      </div>
    </div>
  );
}
