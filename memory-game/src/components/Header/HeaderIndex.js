import React from "react";
import "./HeaderStyle.css";

function HeaderIndex(props) {
  return (
    <div>
      <h1 className="title"> Cruz Peruse </h1>
      <h4 className="title"> Spot the difference! Test your memory and try to select each Cruz lookalike only once.</h4>
      <h1 className="title"> Score: {props.score} | High Score: {props.highScore} </h1>
    </div>
  );
}

export default HeaderIndex;
