import React from "react";
import "../styles/Form.css";

const Form = () => {
  return (
    <form>
      <label htmlFor=''>CARDHOLDER NAME</label>
      <input type='text' placeholder='e.g. Jane Appleseed' />
      <label htmlFor=''>CARD NUMBER</label>
      <input type='text' placeholder='e.g. 1234 5678 9123 0000' />

      <label htmlFor=''>EXP. DATE (MM/YY)</label>

      <input type='text' placeholder='MM' />
      <input type='text' placeholder='YY' />

      <label htmlFor=''>CVC</label>
      <input type='text' placeholder='e.g. 123' />

      <button>Confirm</button>
    </form>
  );
};

export default Form;
