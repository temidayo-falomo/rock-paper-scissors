import React, { useContext, useEffect } from "react";
import { AppContext } from "../../helper/Context";
import { StyledMainGame } from "./MainGame.styled";
import Aos from "aos";
import "aos/dist/aos.css";
import useSound from "use-sound";
import Sound from "./bubble.mp3";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function MainGame() {
  const {
    setClickedBtn,
    randomChoiceName,
    setResult,
    setChoiceColor,
    setChoiceItem,
    setInfo,
  } = useContext(AppContext);

  const handleWhichCardWasPicked = (choice: string, color: string) => {
    setClickedBtn(true);

    setChoiceItem(choice);
    setChoiceColor(color);

    //Scissors
    if (choice === "scissors" && randomChoiceName === "spock") {
      setResult("Lose");
      setInfo("Spock smashes scissors");
    } else if (choice === "scissors" && randomChoiceName === "paper") {
      setResult("Win");
      setInfo("Scissors cuts paper");
    } else if (choice === "scissors" && randomChoiceName === "lizard") {
      setResult("Win");
      setInfo("Scissors cuts Lizard");
    } else if (choice === "scissors" && randomChoiceName === "rock") {
      setResult("Lose");
      setInfo("Rock crushes Scissors");
    }

    //Spock
    if (choice === "spock" && randomChoiceName === "scissors") {
      setResult("Win");

      setInfo("Spock smashes scissors");
    } else if (choice === "spock" && randomChoiceName === "paper") {
      setResult("Lose");
      setInfo("Paper disproves Spock");
    } else if (choice === "spock" && randomChoiceName === "lizard") {
      setResult("Lose");
      setInfo("Lizard poisons Spock");
    } else if (choice === "spock" && randomChoiceName === "rock") {
      setResult("Win");
      setInfo("Spock vaporizes rock");
    }

    //Paper
    if (choice === "paper" && randomChoiceName === "scissors") {
      setResult("Lose");
      setInfo("Scissors cuts paper");
    } else if (choice === "paper" && randomChoiceName === "spock") {
      setResult("Win");

      setInfo("paper disproves Spock");
    } else if (choice === "paper" && randomChoiceName === "lizard") {
      setResult("Lose");
      setInfo("lizard eats paper");
    } else if (choice === "paper" && randomChoiceName === "rock") {
      setResult("Win");

      setInfo("paper covers rock");
    }

    //Lizard
    if (choice === "lizard" && randomChoiceName === "scissors") {
      setResult("Lose");
      setInfo("scissors decapitates lizard");
    } else if (choice === "lizard" && randomChoiceName === "spock") {
      setResult("Win");
      setInfo("lizard poisons Spock");
    } else if (choice === "lizard" && randomChoiceName === "paper") {
      setResult("Win");
      setInfo("Lizard eats paper");
    } else if (choice === "lizard" && randomChoiceName === "rock") {
      setResult("Lose");
      setInfo("rock crushes lizard");
    }

    //Rock
    if (choice === "rock" && randomChoiceName === "scissors") {
      setResult("Win");
      setInfo("rock crushes scissors");
    } else if (choice === "rock" && randomChoiceName === "spock") {
      setResult("Lose");
      setInfo("Spock vaporizes rock");
    } else if (choice === "rock" && randomChoiceName === "paper") {
      setResult("Lose");
      setInfo("paper covers rock");
    } else if (choice === "rock" && randomChoiceName === "lizard") {
      setResult("Win");
      setInfo("rock crushes lizard");
    }

    //General IF check.
    if (choice === randomChoiceName) {
      setResult("Draw");
    }
  };

  const [play] = useSound(Sound, { playbackRate: 1 });

  useEffect(() => {
    Aos.init({
      duration: 900,
      disable: function () {
        var maxWidth = 322;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  return (
    <StyledMainGame>
      <div
        className="pentagon col center btw"
        style={{
          backgroundImage: `url("./images/bg-pentagon.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Tippy content="Scissors">
          <div
            className="center round yellow "
            data-aos="fade-up-right"
            onClick={() => {
              play();
              handleWhichCardWasPicked("scissors", "yellow");
            }}
          >
            <div className="inner-round">
              <img src="./images/icon-scissors.svg" alt="" />
            </div>
          </div>
        </Tippy>

        <div
          className="row btw"
          style={{ width: "120%", marginBottom: "3rem" }}
        >
          <Tippy content="Spock">
            <div
              data-aos="fade-up-left"
              className="round aqua"
              onClick={() => {
                play();
                handleWhichCardWasPicked("spock", "aqua");
              }}
            >
              <div className="inner-round">
                <img src="./images/icon-spock.svg" alt="" />
              </div>
            </div>
          </Tippy>

          <Tippy content="Paper">
            <div
              data-aos="fade-down-right"
              className="round roy-blue"
              onClick={() => {
                play();
                handleWhichCardWasPicked("paper", "roy-blue");
              }}
            >
              <div className="inner-round">
                <img src="./images/icon-paper.svg" alt="" />
              </div>
            </div>
          </Tippy>
        </div>

        <div
          className="row btw btm-rw"
          style={{ width: "80%", marginBottom: "-1rem" }}
        >
          <Tippy content="Lizard">
            <div
              data-aos="fade-down-right"
              className="round purplish"
              onClick={() => {
                play();
                handleWhichCardWasPicked("lizard", "purplish");
              }}
            >
              <div className="inner-round">
                <img src="./images/icon-lizard.svg" alt="" />
              </div>
            </div>
          </Tippy>

          <Tippy content="Rock">
            <div
              data-aos="fade-down-left"
              className="round red"
              onClick={() => {
                play();
                handleWhichCardWasPicked("rock", "red");
              }}
            >
              <div className="inner-round">
                <img src="./images/icon-rock.svg" alt="" />
              </div>
            </div>
          </Tippy>
        </div>
      </div>
    </StyledMainGame>
  );
}

export default MainGame;
