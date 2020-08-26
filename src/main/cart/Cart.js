import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Styles from "./cart.module.css";

const cart = () => {
  return (
    <div className={Styles.cartIcon}>
      <Badge badgeContent={1}>
        <ShoppingBasketIcon style={{ fontSize: 20 }} />
      </Badge>
    </div>
  );
};

export default cart;
