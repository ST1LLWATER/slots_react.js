import React from "react";
import "./App.css";
import SlotM from "./SlotM.jsx";

const items = ["😂", "😨", "🥶", "😷", "🤠"];

const randomizer = () => {
  let randomNumber = [];
  let i;
  for (i = 0; i < 9; i++) {
    randomNumber.push(Math.trunc(Math.random() * 3));
  }
  // console.log(randomNumber);
  return randomNumber;
};

const App = () => {
  const randomNumber = randomizer();

  return (
    <>
      <h1 className="heading">
        🎰 Welcome To <span className="head_design">Slots Minigame</span> 🎰
      </h1>
      <div className="slots">
        <SlotM
          x={items[randomNumber[0]]}
          y={items[randomNumber[1]]}
          z={items[randomNumber[2]]}
        />
        <hr />
        <SlotM
          x={items[randomNumber[3]]}
          y={items[randomNumber[4]]}
          z={items[randomNumber[5]]}
        />
        <hr />
        <SlotM
          x={items[randomNumber[6]]}
          y={items[randomNumber[7]]}
          z={items[randomNumber[8]]}
        />
      </div>
      <button className="roll" onClick={randomizer}>
        CLICK TO ROLL
      </button>
    </>
  );
};

export default App;
