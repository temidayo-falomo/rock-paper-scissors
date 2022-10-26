import React, { useContext, useEffect } from "react";
import { choices } from "../../data";
import { AppContext } from "../../helper/Context";
import { StyledGameResult } from "./GameResult.styled";
import Aos from "aos";
import "aos/dist/aos.css";

function GameResult() {
  const {
    setClickedBtn,
    result,
    randomChoiceImage,
    choiceColor,
    choiceItem,
    randomChoiceColor,
    setRandomChoiceName,
    randomNumber,
    setRandomChoiceImage,
    setRandomChoiceColor,
    info,
    setScore,
    score,
  } = useContext(AppContext);

  const handleButtonClick = () => {
    setClickedBtn(false);
    setRandomChoiceName(choices[randomNumber].name);
    setRandomChoiceImage(choices[randomNumber].image);
    setRandomChoiceColor(choices[randomNumber].color);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: function () {
        var maxWidth = 100;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  useEffect(() => {
    if (result === "Lose") {
      setScore(score - 1);
    }
    if (result === "Win") {
      setScore(score + 1);
    }
  }, []);

  return (
    <StyledGameResult>
      <div className="col gap-1 center left">
        {result === "Win" && (
          <img
            src="./images/circle-bg.png"
            alt=""
            className="circle-bg"
            data-aos="zoom-in"
          />
        )}
        <h4>YOU PICKED</h4>
        <div className={`round ${choiceColor}`} data-aos="zoom-in">
          <div className="inner-round">
            <img src={`./images/icon-${choiceItem}.svg`} alt="" />
          </div>
        </div>
      </div>

      <div className="col gap-1 center upp mid">
        <h1 style={{ textAlign: "center" }}>YOU {result}</h1>
        <p>( -{result === "Draw" ? "draws" : info}- )</p>
        <button onClick={handleButtonClick}>PLAY AGAIN</button>
      </div>

      <div className="col gap-1 center right" data-aos="zoom-in">
        {result === "Lose" && (
          <img
            src="./images/circle-bg.png"
            alt=""
            className="circle-bg"
            data-aos="zoom-in"
          />
        )}
        <h4>THE HOUSE PICKED</h4>
        <div className={`round ${randomChoiceColor}`} data-aos="zoom-in">
          <div className="inner-round">
            <img src={randomChoiceImage} alt="" />
          </div>
        </div>
      </div>
    </StyledGameResult>
  );
}

export default GameResult;
