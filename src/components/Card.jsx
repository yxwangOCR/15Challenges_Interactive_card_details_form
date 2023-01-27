import "../styles/style.css";
import React from "react";
import CardLogo from "../images/card-logo.svg";

const Card = () => {
  return (
    <div className='card'>
      <img className='card__logo' src={CardLogo} alt='card logo' />
      <div className='card__content'>
        <span>0000 0000 0000 0000</span>
        <div>
          <span>JANE APPLESEED</span>
          <span>00/00</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
