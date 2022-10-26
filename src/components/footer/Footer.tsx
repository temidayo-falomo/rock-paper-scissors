import React, { useContext, useEffect } from "react";
import { AppContext } from "../../helper/Context";
import { StyledFooter } from "./Footer.styled";

function Footer() {

  const { setShowModal } = useContext(AppContext);

  return (
    <StyledFooter>
      <button onClick={() => setShowModal(true)} >Rules</button>
    </StyledFooter>
  );
}

export default Footer;
