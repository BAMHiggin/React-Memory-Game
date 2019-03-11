import React from "react";
import "./WrapperStyle.css";

function Wrapper(props) {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-info sticky">
        {/* <div className="my-2 my-sm-0">  </div> */}
        {/* <h1 className="display-5">Clicky Memory Game </h1> */}
        <h1 className="display-5" id="scoreTitle"> Score: {props.score} | High Score: {props.highScore} </h1>
      </nav>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-1"> Cruz Peruse </h1>
          <hr></hr>
          <h4 className="display-4"> Spot the difference! Test your memory and try to select each Ted Cruz lookalike only once.</h4>

        </div>
      </div>
      
      <div className="wrapper">{props.children}</div>

    </div>
  )
}

export default Wrapper;
