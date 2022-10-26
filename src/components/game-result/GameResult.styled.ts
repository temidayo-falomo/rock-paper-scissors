import styled from "styled-components";

export const StyledGameResult = styled.div`
  height: 60vh;
  margin: 1rem auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .yellow {
    border: 25px hsl(39, 89%, 49%) solid;
  }

  .roy-blue {
    border: 25px hsl(230, 89%, 65%) solid;
  }

  .red {
    border: 25px hsl(349, 70%, 56%) solid;
  }

  .purplish {
    border: 25px hsl(261, 72%, 63%) solid;
  }

  .aqua {
    border: 25px hsl(189, 58%, 57%) solid;
  }

  .left,
  .right {
    position: relative;
    border-radius: 50%;

    .circle-bg {
      position: absolute;
      width: 600px;
      z-index: -1;
      top: -6.5rem;
      right: -9rem;
    }
  }

  button {
    padding: 15px;
    border-radius: 10px;
    width: 250px;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 5px;
    margin: 0.5rem;
    transition: 0.5s ease;

    :hover {
      border: 2px white solid;
      color: #fff;
      background-color: transparent;
      transition: 0.5s ease;
    }
  }

  .upp h1 {
    font-size: 5rem;
  }

  .round {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5 ease all;

    :hover {
      transform: scale(1.3);
      transition: 0.5 ease all;
    }

    .inner-round {
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
      padding: 20px;
      width: 96%;
      height: 96%;
      display: grid;
      place-content: center;
      border-radius: 50%;

      img {
        width: 90px;
      }
    }
  }
`;
