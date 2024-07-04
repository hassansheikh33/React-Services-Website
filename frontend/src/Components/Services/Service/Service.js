import classes from "./Service.module.css";
import { Link } from "react-router-dom";

export default function Service(props) {
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>{props.svg}</div>
      <div className={classes.textContainer}>
        <h2>{props.name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis
          eius asperiores nam autem dignissimos ve
        </p>
      </div>
      <Link className={classes.link} href="#">
        <p>Read More</p>
        <svg
          className={classes.arrow}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
}
