import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 70%;
  margin: 1rem auto;
  position: fixed;
  bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);

  button {
    padding: 15px;
    border-radius: 10px;
    font-size: 1.2rem;
    width: 150px;
    font-weight: 600;
    border: 1px hsl(217, 16%, 45%) solid;
    background-color: transparent;
    color: #fff;

    :hover {
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
      background-color: gainsboro;
      color: #000;
    }
  }
`;
