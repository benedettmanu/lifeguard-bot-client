import styled from "styled-components";
import theme from "../theme";

export const PrivacyPolicy = styled.section`
  max-width: 1190px;
  width: 100%;
  padding: 100px 20px;

  & > #privacyPolicy {
    text-align: justify;

    & > h1 {
      font-size: 2.2rem;
      font-weight: 900;
    }

    & > p {
      color: ${theme.colors.textSecondary};
      font-size: 1.1rem;

      & > #boldText {
        font-weight: 900;
      }

      & > a {
        text-decoration: none;
        color: ${theme.colors.textSecondary};
      }
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
    padding: 50px 20px;
  }
`;
