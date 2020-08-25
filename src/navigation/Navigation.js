import React from "react";
import NavItems from "./navitems/NavItems";
import Cart from "../main/cart/Cart";
import Logo from "../assets/logo.png";
import Styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <div className={Styles.navContainer}>
      <div className={Styles.logoContainer}>
        <img className={Styles.logo} src={Logo} alt="starbucks-logo" />
        &nbsp;
        <h5 className={Styles.logoTitle}>Starbucks</h5>
      </div>
      <div className={Styles.navItem}>
        <NavItems />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
};

export default Navigation;
