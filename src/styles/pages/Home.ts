import styled from "styled-components";

export const BackgroundComponent = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: relative;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const TextContainer = styled.div`
  align-items: flex-start;
  position: absolute;
  top: 30vh;
  left: 5vw;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 7rem;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 1080px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
`;

export const Button = styled.button`
  background-color: #009fe3;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  font-weight: 400;
  margin: 1rem 2px;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
