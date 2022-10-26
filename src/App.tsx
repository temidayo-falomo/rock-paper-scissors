import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { choices } from "./data";
import GlobalStyle from "./Globalstyles";
import { AppContext } from "./helper/Context";
import Home from "./pages/home/Home";

function App() {
  const [score, setScore] = useState<number>(0);
  const [clickedBtn, setClickedBtn] = useState<boolean>(false);
  const [picked, setPicked] = useState<string>("");

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * choices.length)
  );

  const [randomChoiceName, setRandomChoiceName] = useState(
    choices[randomNumber].name
  );

  const [randomChoiceImage, setRandomChoiceImage] = useState(
    choices[randomNumber].image
  );

  const [randomChoiceColor, setRandomChoiceColor] = useState(
    choices[randomNumber].color
  );

  const [result, setResult] = useState<any>("");

  const [choiceColor, setChoiceColor] = useState("");

  const [choiceItem, setChoiceItem] = useState("");

  const [info, setInfo] = useState("");

  const [showModal, setShowModal] = useState(false);

  if (score < 0) {
    setScore(0);
  }

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * choices.length));
  }, [clickedBtn]);

  return (
    <AppContext.Provider
      value={{
        score,
        setScore,
        clickedBtn,
        setClickedBtn,
        picked,
        setPicked,
        randomChoiceName,
        randomChoiceImage,
        randomNumber,
        result,
        setResult,
        choiceColor,
        setChoiceColor,
        choiceItem,
        setChoiceItem,
        randomChoiceColor,
        setRandomNumber,
        setRandomChoiceName,
        setRandomChoiceImage,
        setRandomChoiceColor,
        info,
        setInfo,
        showModal,
        setShowModal,
      }}
    >
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
