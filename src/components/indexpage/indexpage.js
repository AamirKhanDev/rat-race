import React, { useState } from "react";
import "./indexpage.css";
import { Instructions } from "../instructions/Instructions.js";
import { StartButton } from "../start-button/startButton";

// const props = {navigate: 'someValue'}
// Destructuring
// const {navigate} = props
// const navigate = props.navigate

const IndexPage = ({ navigate }) => {
  const startGame = () => {
    navigate("/game");
  };

  return (
    <div className="main-container">
      <div className="title-container">
        <div className="title-content">
        <div class="bouncing-text">
          <div class="r">R</div>
          <div class="a">A</div>
          <div class="t">T</div>
          <div class="r2">R</div>
          <div class="a2">A</div>
          <div class="c">C</div>
          <div class="e">E</div>
          <div class="shadow"></div>
          <div class="shadow-two"></div>
        </div>
          <img src="_com.apple.Pasteboard.crud9d.png" alt=""></img>
        </div>
      </div>
      <div className="instructions">
        <div className="content">
          <Instructions />
        </div>
      </div>
      <div className="button-container">
        <StartButton startGame={startGame} />
      </div>
    </div>
  );
};

export default IndexPage;