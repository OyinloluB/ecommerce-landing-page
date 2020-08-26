import React from "react";
import HeroText from "./HeroText";
import Product from "../assets/greensb.png";
import Caramel from "../assets/caramel.png";
import Strawberry from "../assets/strawberry.png";
import Styles from "./main.module.css";

const Main = () => {
  return (
    <>
      <div className={Styles.mainContainer}>
        <HeroText Styles={Styles} />
        <div className={Styles.secondRow}>
          <img
            src={Product}
            alt="product"
            style={{ objectFit: "contain", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className={Styles.thirdRow}>
          <img
            src={Caramel}
            alt="product"
            className={Styles.image}
            style={{
              borderRadius: "100%",
              height: "100px",
              width: "100px",
              backgroundColor: "#f1c171",
            }}
          />
          <img
            src={Strawberry}
            alt="product"
            className={Styles.image}
            style={{
              borderRadius: "100%",
              height: "100px",
              width: "100px",
              backgroundColor: "#d46374",
            }}
          />
          <img
            src={Product}
            alt="product"
            className={Styles.image}
            style={{
              borderRadius: "100%",
              height: "100px",
              width: "100px",
              backgroundColor: "#ea8261",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
