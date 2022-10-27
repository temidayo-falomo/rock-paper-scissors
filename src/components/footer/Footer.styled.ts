import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 70%;
  height: 20vh;
  margin: 1rem auto;
  margin-top: 2rem;
  bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 2rem;

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
