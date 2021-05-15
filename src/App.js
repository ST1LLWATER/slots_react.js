import React from "react";
import "./App.css";

const SlotM = (props) => {
  if (props.x === props.y && props.y === props.z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>You Got A Match!</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>You Got A Match!</h1>
          <hr />
        </div>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <h1>
        🎰 Welcome To <span>Slots Minigame</span> 🎰
      </h1>
      <p>Hello World</p>
    </>
  );
};

export default App;
