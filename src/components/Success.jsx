import "../styles/style.css";
import CompleteIcon from "../images/icon-complete.svg";

const Success = () => {
  return (
    <div className="success">
      <img src={CompleteIcon} alt='complete icon' />
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button>Continue</button>
    </div>
  );
};

export default Success;
