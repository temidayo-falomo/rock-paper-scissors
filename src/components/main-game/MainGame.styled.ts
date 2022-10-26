import styled from "styled-components";

export const StyledMainGame = styled.section`
 
  margin: 1rem auto;
  margin-top: 3rem;
  display: grid;
  place-content: center;
  width: 70%;

  .yellow {
    border: 15px hsl(39, 89%, 49%) solid;
  }

  .roy-blue {
    border: 15px hsl(230, 89%, 65%) solid;
  }

  .red {
    border: 15px hsl(349, 70%, 56%) solid;
  }

  .purplish {
    border: 15px hsl(261, 72%, 63%) solid;
  }

  .aqua {
    border: 15px hsl(189, 58%, 57%) solid;
  }

  .inner-round {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    padding: 20px;
    width: 93%;
    height: 95%;
    display: grid;
    place-content: center;
    border-radius: 50%;
  }

  .pentagon {
    width: 550px;
    margin-bottom: 4rem;

    .round {
      cursor: pointer;
      min-height: 180px;
      min-width: 180px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      color: #000;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;

      :hover {
        transform: scale(1.3);
      }
    }
  }

  @media (max-width: 1000px) {
    .pentagon {
      width: 300px;

      .round {
        height: 100px;
        width: 100px;
        min-height: 100px;
        min-width: 100px;
      }
    }
  }
`;
