import React, { useContext } from "react";
import Footer from "../../components/footer/Footer";
import GameResult from "../../components/game-result/GameResult";
import MainGame from "../../components/main-game/MainGame";
import Modal from "../../components/modal/Modal";
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../helper/Context";
import { StyledHome } from "./Home.styled";

function Home() {
  const { clickedBtn, showModal } = useContext(AppContext);

  return (
    <StyledHome>
      <Navbar />
      {clickedBtn ? <GameResult /> : <MainGame />}
      <Footer />
      {showModal && <Modal />}
    </StyledHome>
  );
}

export default Home;
