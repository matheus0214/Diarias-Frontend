import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    background: #3a7bd5;
    color: #fff;
    font-weight: bold;

    opacity: 0;
    transition: opacity 0.2;
    visibility: hidden;

    left: 50%;
    bottom: calc(100% + 8px);
    transform: translateX(-50%);
    border-radius: 5px;
    font-size: 14px;
    width: 140px;
    padding: 8px;

    &::before {
      content: '';
      border-width: 6px 6px 0 6px;
      border-color: #3a7bd5 transparent;
      border-style: solid;
      position: absolute;
      top: 100%;
      left: calc(50% - 3px);
      transform: translateX(-50%);
    }
  }

  &:hover {
    span {
      opacity: 1;
      visibility: visible;
    }
  }
`;
