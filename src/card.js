import "./card.css";
import Form from "./Form";

function Card(props) {
  return (
    <div className="card-container">
      <header className="bank">
        <h1>{props.data.bank}</h1>
      </header>
      <div className="cardNum">{props.data.cardNum}</div>
      <div className="cardExpiry">
        <span className="valid-thru">
          VALID <br />
          THRU:
        </span>
        {props.data.expiry}
      </div>
      <div className="cardHolder">{props.data.name}</div>
    </div>
  );
}

export default Card;
