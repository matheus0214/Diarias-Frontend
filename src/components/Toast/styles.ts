import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'error' | 'success';
}

const toastTypeVariation = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,

  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,

  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<ToastProps>`
  position: relative;

  border-radius: 4px;
  width: 340px;
  padding: 8px 30px 8px 16px;

  ${(props) => toastTypeVariation[props.type || 'info']};

  & + div {
    margin-top: 10px;
  }

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      line-height: 20px;
      opacity: 0.8;
    }
  }

  button {
    position: absolute;
    background: transparent;
    right: 8px;
    top: 8px;
    border: 0;
    opacity: 0.6;
    color: inherit;
  }
`;
