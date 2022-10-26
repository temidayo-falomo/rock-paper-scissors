import React, { useContext, useEffect } from "react";
import { AppContext } from "../../helper/Context";
import { StyledNavbar } from "./Navbar.styled";
import Aos from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const { score } = useContext(AppContext);

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <StyledNavbar>
      <h2 className="logo">
        <img src="./images/logo-bonus.svg" alt="" />
      </h2>
      <div className="scoreboard col center">
        <span className="upp">Score</span>
        <h2 className="score" data-aos="slide-up">
          {score}
        </h2>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
