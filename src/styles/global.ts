import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  html {
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: white;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Londrina Solid', sans-serif;
    font-weight: 300;
  }

  .ReactModal__Overlay {
    background-color: transparent !important;
    z-index: 2;
    display: flex;
    width: 100%;
    min-height: 100vh;

    .ReactModal__Content {
      width: 100vw !important;
      height: 100vh !important;
      backdrop-filter: blur(29px);
      background-color: #ffffff3d !important;
      position: relative !important;
      border-radius: 0px !important;
      padding: 1rem !important;
      inset: unset !important;
      border: none !important;
      display: flex;
    }
  }
`;
