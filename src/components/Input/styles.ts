import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  focused: boolean;
  hasValue: boolean;
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 2px solid #f7f7f7;
  background: #fcfcfc;
  color: #ccc;
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
      color: #00d2ff;
    `}

  ${(props) =>
    props.hasValue &&
    css`
      color: #00d2ff;
    `}

  ${(props) =>
    props.isError &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}

  input {
    background: transparent;
    border: 0;
    color: #444;

    flex: 1;

    &::placeholder {
      color: #ccc;
    }
  }

  svg {
    margin-right: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  span {
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
