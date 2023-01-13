import React from "react";
import "../styles/Hero.css";
import CardBack from "../images/bg-card-back.png";
import CardFront from "../images/bg-card-front.png";
import Card from "./Card";

const Hero = () => {
  return (
    <section>
      <img src={CardBack} alt='card back' />
      <img src={CardFront} alt='card front' />
      <Card />
    </section>
  );
};

export default Hero;
