import styled from "styled-components";
import { Container } from "../Container";

interface Props {
  colorTheme: "light" | "blue";
  route: string;
}

const routesForAbsoluteBackground = [
  "/",
  "/user-registration",
  "/login",
  "/flood-registration",
];

export const HeaderComponent = styled.header<Props>`
  width: 100%;
  position: ${(props) =>
    routesForAbsoluteBackground.includes(props.route)
      ? "absolute"
      : "relative"};
  z-index: 2;

  > div {
    ${Container} {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      @media (max-width: 820px) {
        justify-content: center;
      }

      button {
        display: flex;
        align-items: center;
        background: transparent;
        border: none;
        color: ${(props) =>
          props.colorTheme === "light" ? "white" : props.theme.colors.blue};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  > section {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;

    #logo {
      width: 50%;
      padding-bottom: 0.8rem;
      text-align: center;
      font-size: 2.25rem;
      color: ${(props) =>
        props.colorTheme === "light" ? "white" : props.theme.colors.blue};
      cursor: pointer;

      @media (max-width: 820px) {
        width: 80%;
        border: none;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 10px;
      top: 25px;
      font-size: 2.6rem;
      background: transparent;
      border: none;

      color: ${(props) =>
        props.colorTheme === "light" ? "white" : props.theme.colors.dark};
    }
  }
`;

export const Menu = styled.div<Props>`
  padding: 3rem 1rem;
  list-style: none;
  display: grid;
  gap: 1rem;
  font-size: 1.2rem;
  width: 200px;
  text-align: center;
  font-weight: 500;

  li {
    &.selected {
      text-decoration: underline;
    }

    p {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    cursor: pointer;
  }

  a {
    all: unset;
  }
`;
