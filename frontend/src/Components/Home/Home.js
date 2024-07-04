import React from "react";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1>
          Start <span className={classes.green}>React Routing</span> for your
          project
        </h1>
        <p>
          Start gaining the traction you've always wanted with our next-level
          templates and designs. Crafted to help you tell your story.
        </p>
      </div>
      <div className={classes.btnContainer}>
        <button
          onClick={() => navigate("/services")}
          className={classes.getStartedBtn}
        >
          Get Started
          <svg
            className={classes.arrow}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
          </svg>
        </button>
        <button
          onClick={() => navigate("/aboutUs")}
          className={classes.learnMoreBtn}
        >
          Learn More{" "}
          <svg
            className={classes.arrow}
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </button>
      </div>
      <div className={classes.imageContainer}>
        <div className={classes.imgTop}>
          <div className={classes.circle} />
          <div className={classes.circle} />
          <div className={classes.circle} />
        </div>
        <img
          className={classes.image}
          src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"
          alt="service example"
        ></img>
      </div>
    </div>
  );
}
