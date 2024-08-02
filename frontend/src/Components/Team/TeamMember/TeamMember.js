import React from "react";
import classes from "./TeamMember.module.css";
import { useNavigate } from "react-router-dom";

export default function TeamMember(props) {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          onClick={() => navigate(`/team/${props.designation}`)}
          className={`${classes.image} ${props.main ? classes.mainImage : ""}`}
          src={props.src}
          alt={props.alt}
        />
      </div>
      <div
        className={`${classes.memberDetails} ${
          props.main ? classes.mainMemberDetails : ""
        }`}
      >
        <h2>{props.name}</h2>
        <p>{props.designation}</p>
      </div>
    </div>
  );
}
