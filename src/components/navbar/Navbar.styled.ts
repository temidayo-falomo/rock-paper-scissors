import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 20px;
  margin: 2rem auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 2px hsl(217, 16%, 45%) solid;

  .logo {
    font-size: 2.5rem;
    line-height: 32px;
  }

  .scoreboard {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    color: #000;
    width: 120px;

    .upp {
      color: hsl(229, 64%, 46%);
    }

    .score {
      font-size: 3rem;
    }
  }
`;
