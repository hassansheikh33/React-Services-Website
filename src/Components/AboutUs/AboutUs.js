import { useNavigate } from "react-router-dom";
import classes from "./AboutUs.module.css";
import mobile from "../../assets/mobile.png";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil
          officia tempora necessitatibus iure animi excepturi in, culpa laborum
          facere? A dicta eligendi magni accusantium illo porro vitae itaque
          ipsam doloribus, modi praesentium magnam, similique nobis ipsa dolorem
        </p>
        <div className={classes.btnContainer}>
          <button
            onClick={() => navigate("/services")}
            className={classes.servicesBtn}
          >
            Checkout Our Services!
          </button>
          <button onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </div>
      <div className={classes.pictureContainer}>
        <img src={mobile} alt="iphone x" />
      </div>
    </div>
  );
}
