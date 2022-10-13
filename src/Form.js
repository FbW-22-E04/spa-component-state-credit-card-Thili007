import { useState } from "react";
import Card from "./card";
import "./form.css";

function Form() {
  const [cardData, setCardData] = useState({
    name: "",
    bank: "",
    cardNum: 0,
    expiry: 0,
  });

  const [showCard, setShowCard] = useState(false);

  const submitItems = () => {
    setShowCard(true);
  };

  const resetItems = () => {
    setShowCard(false);
  };

  return (
    <div className="form-container">
      <label htmlFor="Name">
        Name :
        <input
          onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
          className="form-input"
          placeholder="type your name"
        />
      </label>

      <br />
      <label htmlFor="bank-Name">
        Bank Name :
        <input
          onChange={(e) => setCardData({ ...cardData, bank: e.target.value })}
          className="form-input"
          placeholder="Please enter your Bank Name"
        />
      </label>
      <br />
      <label htmlFor="card-num">
        Bank Card Number :
        <input
          onChange={(e) =>
            setCardData({ ...cardData, cardNum: e.target.value })
          }
          className="form-input"
          placeholder="Please enter your Bank Name"
        />
      </label>
      <br />
      <label htmlFor="bank-Name">
        Card Expiry Number :
        <input
          onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
          className="form-input"
          placeholder="Please enter your Bank Name"
        />
      </label>
      <br />
      <button onClick={submitItems}> Submit</button>
      <button onClick={resetItems}>Reset</button>

      <div>{showCard ? <Card data={{ ...cardData }} /> : null}</div>
    </div>
  );
}

export default Form;
