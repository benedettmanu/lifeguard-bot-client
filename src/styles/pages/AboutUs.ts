import styled from "styled-components";
import theme from "../theme";

export const AboutUsContent = styled.div`
  max-width: 1190px;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  margin-bottom: 3rem;
  height: 80vh;

  img {
    justify-self: end;
    width: 28vw;

    @media (max-width: 1245px) {
      width: 35vw;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    img {
      width: 60vw;
      justify-self: center;
    }
  }
`;

export const TextContent = styled.div`
  margin-left: 5rem;
  justify-self: start;

  h1 {
    font-size: 5em;
    color: ${theme.colors.blue};
  }

  p {
    font-size: 1.7em;
  }

  @media (max-width: 1050px) {
    h1 {
      font-size: 4em;
    }
    p {
      font-size: 1.4em;
    }
  }

  @media (max-width: 900px) {
    margin-left: 1rem;
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 1.2em;
    }
  }
`;
