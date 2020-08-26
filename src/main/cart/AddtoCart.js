import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Styles from "./cart.module.css";

const AddtoCart = () => {
  return (
    <div className={Styles.addtocartContainer}>
      <div className={Styles.addtocart}>
        <span className={Styles.signs}>-</span>
        <span
          style={{
            borderRight: "1px solid rgb(214, 213, 213)",
            borderLeft: "1px solid rgb(214, 213, 213)",
          }}
        >
          0
        </span>
        <span className={Styles.signs}>+</span>
      </div>
      <button className={Styles.button}>
        Add to cart <ArrowRightIcon />
      </button>
    </div>
  );
};

export default AddtoCart;
