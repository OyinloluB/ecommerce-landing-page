import React from "react";
import Rating from "@material-ui/lab/Rating";
import Styles from "./rating.module.css";

const Ratings = () => {
  return (
    <div className={Styles.starContainer}>
      <Rating name="size-small" defaultValue={4} size="small" />
      <span className={Styles.amountText}>&#36; 39.00</span>
    </div>
  );
};

export default Ratings;
