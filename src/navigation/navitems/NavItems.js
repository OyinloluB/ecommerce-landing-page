import React from "react";
import Styles from "./navitem.module.css";

const NavItems = () => {
  return (
    <div>
      <ul className={Styles.listContainer}>
        <li className={Styles.active}>Home</li>
        <li>Trending</li>
        <li>Rewards</li>
        <li>Gift Cards</li>
        <li>Responsibility</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default NavItems;
