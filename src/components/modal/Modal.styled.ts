import styled from "styled-components";

export const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  background: #26245766;

  .modal-box {
    background-color: aliceblue;
    color: #b1b4c4;
    max-width: 400px;
    height: 400px;
    min-width: 300px;
    border-radius: 10px;
    padding: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .pointer {
      font-size: 2rem;
    }

    .rules {
      width: 80%;
      margin: auto;
    }
  }
`;
