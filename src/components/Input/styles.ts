import styled, { css } from 'styled-components';

interface ContainerProps {
  focused: boolean;
  hasValue: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 2px solid #f7f7f7;
  background: #fcfcfc;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 15px;
  }

  ${(props) =>
    props.focused &&
    css`
      border-color: #00d2ff;

      svg {
        color: #00d2ff !important;
      }
    `}

  ${(props) =>
    props.hasValue &&
    css`
      svg {
        color: #00d2ff !important;
      }
    `}

  input {
    background: transparent;
    border: 0;
    color: #333;

    flex: 1;

    &::placeholder {
      color: #ccc;
    }
  }

  svg {
    margin-right: 8px;
    color: #ccc;
  }
`;
