import React from "react";
import "./App.css";
import SlotM from "./SlotM.jsx";

const items = ["😂", "😨", "🥶", "😷", "🤠"];

const randomizer = () => {
  return Math.trunc(Math.random() * 3);
};

const App = () => {
  return (
    <>
      <h1 className="heading">
        🎰 Welcome To <span className="head_design">Slots Minigame</span> 🎰
      </h1>
      <div className="slots">
        <SlotM
          x={items[randomizer()]}
          y={items[randomizer()]}
          z={items[randomizer()]}
        />
        <hr />
        <SlotM
          x={items[randomizer()]}
          y={items[randomizer()]}
          z={items[randomizer()]}
        />
        <hr />
        <SlotM
          x={items[randomizer()]}
          y={items[randomizer()]}
          z={items[randomizer()]}
        />
      </div>
    </>
  );
};

export default App;
