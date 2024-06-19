import { Input } from "antd";
import styled from "styled-components";
import theme from "../theme";

export const StyledPassword = styled(Input.Password)`
  height: 40px;
  border-radius: 20px;

  &::placeholder {
    color: ${theme.colors.lightGrey};
  }
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  background-color: ${theme.colors.light};
  border-radius: 50px;
  padding: 1.25rem 1rem;
  text-align: center;

  h1 {
    font-weight: 400;
  }

  .ant-input {
    height: 40px;
    border-radius: 20px;

    &::placeholder {
      color: ${theme.colors.lightGrey};
    }
  }

  .ant-btn-primary {
    background-color: ${theme.colors.dark};
    border-radius: 20px;
    padding: 0 20px;
    font-size: 18px;
  }

  .ant-form-item {
    margin: 1rem 0;
  }

  .ant-row {
    margin: -0.6rem;
  }

  .ant-select .ant-select-selector {
    height: 40px;
    border-radius: 20px;
  }

  .ant-select .ant-select-selection-placeholder {
    color: ${theme.colors.lightGrey};
  }

  .ant-select .ant-select-selection-item,
  .ant-select .ant-select-selection-search {
    color: ${theme.colors.grey} !important;
  }

  @media (max-width: 768px) {
    width: 90%;
    .ant-input {
      height: 35px;
    }
    .ant-btn-primary {
      padding: 0 15px;
      font-size: 16px;
    }
    .ant-select .ant-select-selector {
      height: 35px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    .ant-input {
      height: 30px;
    }
    .ant-btn-primary {
      padding: 0 10px;
      font-size: 14px;
    }
    .ant-select .ant-select-selector {
      height: 30px;
    }
  }
`;
