import React from "react";
import LocalCafeTwoToneIcon from "@material-ui/icons/LocalCafeTwoTone";
import FastfoodTwoToneIcon from "@material-ui/icons/FastfoodTwoTone";

const Sides = () => {
  return (
    <div>
      <FastfoodTwoToneIcon
        style={{ color: "#21956c", marginRight: "15px", fontSize: 30 }}
      />
      <LocalCafeTwoToneIcon style={{ color: "#21956c", fontSize: 30 }} />
    </div>
  );
};

export default Sides;
