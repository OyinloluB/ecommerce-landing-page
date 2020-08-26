import React from "react";
import Sides from "./sides/Sides";
import AddtoCart from "./cart/AddtoCart";
import Ratings from "./ratings/Ratings";

const HeroText = ({ Styles }) => {
  return (
    <div className={Styles.firstRow}>
      <h1>Caramel Ribbon</h1>
      <Ratings />
      <p className={Styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </p>
      <p style={{ fontWeight: "bold" }}>Serve with</p>
      <Sides />
      <AddtoCart />
    </div>
  );
};

export default HeroText;
