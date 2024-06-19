import styled from "styled-components";
import theme from "../theme";

export const Content = styled.section`
  max-width: 1190px;
  width: 100%;
  padding: 100px 20px;
  min-height: 80vh;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  border: 1px solid ${theme.colors.dark};
  padding: 8px;
  background-color: ${theme.colors.lightSecondary};
`;

export const Td = styled.td`
  border: 1px solid ${theme.colors.dark};
  padding: 8px;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${theme.colors.dark};

  &:hover {
    background-color: ${theme.colors.lightSecondary};
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  text-align: justify;
  font-size: 2.2rem;
  font-weight: 900;
`;

export const Subtitle = styled.h2`
  font-weight: 300;
`;

export const ConfirmButton = styled.button`
  background-color: ${theme.colors.lightGrey};
  color: white;
  border: none;
  padding: 8px 16px;
  margin-left: 8px;
  border-radius: 4px;
  cursor: pointer;
  color: ${theme.colors.background};
  font-weight: 400;

  &:hover {
    background-color: ${theme.colors.background};
    color: ${theme.colors.light};
  }
`;
