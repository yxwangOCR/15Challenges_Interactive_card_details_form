import React from "react";

import CardLogo from "../images/card-logo.svg";
import "../styles/Card.css";

const Card = () => {
  return (
    <div className='card-detail'>
      <img src={CardLogo} alt='card logo' className='card-logo' />
      <div className='card-content'>
        <span>0000 0000 0000 0000</span>
        <div className="card-name">
          <span>JANE APPLESEED</span>
          <span>00/00</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
