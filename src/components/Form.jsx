import React from "react";
import "../styles/Form.css";

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor=''>CARDHOLDER NAME</label>
        <input type='text' placeholder='e.g. Jane Appleseed' />
        <span>Please enter your full name</span>
      </div>

      <div>
        <label htmlFor=''>CARD NUMBER</label>
        <input type='text' placeholder='e.g. 1234 5678 9123 0000' />
        <span>Wrong format, numbers only</span>
      </div>

      <div className='date-cvc'>
        <div>
          <label htmlFor=''>EXP. DATE (MM/YY)</label>
          <div className='date'>
            <input type='text' placeholder='MM' />
            <input type='text' placeholder='YY' />
          </div>
          <span>Can't be blank</span>
        </div>

        <div>
          <label htmlFor=''>CVC</label>
          <input type='text' placeholder='e.g. 123' />
          <span>Can't be blank</span>
        </div>
      </div>

      <button>Confirm</button>
    </form>
  );
};

export default Form;
