import React from "react";
import "../styles/Hero.css";
import CardFront from "../images/bg-card-front.png";
import CardBack from "../images/bg-card-back.png";

const Hero = () => {
  return (
    <section>
      <img src={CardBack} alt='card back' />
      <img src={CardFront} alt='card front' />
    </section>
  );
};

export default Hero;
