import React from "react";
import classes from "./TeamMember.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function TeamMember(props) {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          onClick={() => navigate(`/team/${props.designation}`)}
          className={classes.image}
          src={props.src}
          alt={props.alt}
          style={props.height ? { height: props.height } : {}}
        />
      </div>
      <div
        style={props.mt ? { marginTop: props.mt } : {}}
        className={classes.memberDetails}
      >
        <Link className={classes.link} to={props.designation}>
          <h2>{props.name}</h2>
          <p>{props.designation}</p>
        </Link>
      </div>
    </div>
  );
}
