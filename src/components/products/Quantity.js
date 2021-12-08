import React, { useState } from "react";

const Quantity = () => {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrease = () => {
    if (counter <= 1) {
      return;
    } else {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div
      className={"d-flex justify-content-between align-items-center quantity"}
    >
      <button
        onClick={decrease}
        type={"button"}
        className={
          counter === 1 ? "quantity__btn quantity__btn--light" : "quantity__btn"
        }
      >
        -
      </button>
      <span>{counter}</span>
      <button onClick={increase} type={"button"} className={"quantity__btn"}>
        +
      </button>
    </div>
  );
};

export default Quantity;
