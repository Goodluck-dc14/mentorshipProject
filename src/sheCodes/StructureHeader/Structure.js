import React, { useState } from "react";
import Header from "../Header";
import Hero from "../Hero";

const Structure = () => {
  const [change, setChange] = useState(false);
  const getPosition = () => {
    if (window.scrollY >= 80) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  window.addEventListener("scroll", getPosition);
  return (
    <div>
      <Header
        clr={change ? "white" : ""}
        textColor={change ? "black" : "white"}
        good={change ? "1px solid rgba(0, 0, 0, 0.1)" : ""}
      />
      <Hero />
    </div>
  );
};

export default Structure;
