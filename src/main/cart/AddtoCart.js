import React, { useState } from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Styles from "./cart.module.css";

const AddtoCart = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className={Styles.addtocartContainer}>
      <div className={Styles.addtocart}>
        <span className={Styles.signs} onClick={() => setNumber(number - 1)}>
          -
        </span>
        <span
          style={{
            borderRight: "1px solid rgb(214, 213, 213)",
            borderLeft: "1px solid rgb(214, 213, 213)",
          }}
        >
          {number}
        </span>
        <span className={Styles.signs} onClick={() => setNumber(number + 1)}>
          +
        </span>
      </div>
      <button className={Styles.button}>
        Add to cart <ArrowRightIcon />
      </button>
    </div>
  );
};

export default AddtoCart;
