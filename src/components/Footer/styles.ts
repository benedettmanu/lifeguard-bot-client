import theme from "@/styles/theme";
import styled from "styled-components";

type StyledFooterProps = {
  isHomePage: boolean;
};

const StyledFooter = styled.footer<StyledFooterProps>`
  z-index: 1000;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 0px 6vw 3vh 6vw;
  background-color: ${({ isHomePage }) =>
    isHomePage ? "transparent" : theme.colors.background};
  position: ${({ isHomePage }) => (isHomePage ? "absolute" : "relative")};
  bottom: 0;

  #newsletter {
    top: -50px;
    position: relative;
    padding: 30px;
    max-width: 800px;
    border-radius: 4px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 20px;
    background-color: ${theme.colors.light};
    box-shadow: 0px 0px 15px -1px #1a172033;

    & > h2,
    & > div {
      font-weight: 500;
      display: flex;
      align-items: center;
    }

    #emailInput {
      display: grid;
      width: 300px;
    }

    button {
      color: white;
      height: 100%;
      padding: 6px 8px;
      background-color: #1a1720;
    }

    @media (max-width: 850px) {
      width: 100%;
      grid-row-gap: 20px;
      grid-column-gap: 0px;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;

      & > div {
        display: grid;
        grid-template-columns: 1fr auto;
      }
    }
  }

  #footer {
    width: 100%;
    padding-top: 30px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 20px;

    #copyright {
      color: ${theme.colors.light};
      display: flex;
      grid-template-columns: auto 1fr;
      grid-column-gap: 20px;

      a {
        text-decoration: none;
        color: pink;
        transition: 0.2s;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    #socialMedia {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      a,
      button {
        font-size: 1em;
      }
      a svg,
      button svg {
        width: 20px;
        height: 20px;
      }

      a {
        text-decoration: none;
        color: ${theme.colors.light};
        transition: 0.2s;

        &:not(:last-child) {
          margin-right: 10px;
        }

        &:hover {
          opacity: 0.7;
        }
      }

      button {
        display: flex;
        align-items: center;
        background-color: #1a1720;
        color: white;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: opacity 0.3s ease;
      }

      button:hover {
        opacity: 0.7;
      }
    }

    @media (max-width: 350px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 20px;

      #socialMedia {
        justify-content: flex-start;
      }
    }
  }
`;

export default StyledFooter;
