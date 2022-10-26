import React, { useContext, useEffect } from "react";
import { StyledModal } from "./Modal.styled";
import { MdOutlineCancel } from "react-icons/md";
import { AppContext } from "../../helper/Context";
import Aos from "aos";
import "aos/dist/aos.css";

function Modal() {
  const { setShowModal, showModal } = useContext(AppContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [showModal]);

  return (
    <StyledModal onClick={() => setShowModal(false)}>
      <div className="modal-box col" data-aos="zoom-in">
        <div className="row btw center">
          <h3>RULES</h3>
          <MdOutlineCancel className="pointer" />
        </div>

        <div className="rules">
          <img src="./images/image-rules-bonus.svg" alt="" />
        </div>
      </div>
    </StyledModal>
  );
}

export default Modal;
