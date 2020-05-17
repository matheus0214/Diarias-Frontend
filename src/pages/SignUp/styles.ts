import styled, { keyframes } from 'styled-components';

import DotsImage from '../../assets/polka-dots.svg';

export const Container = styled.div`
  height: 100vh;
  background: #fcfcfc;
  position: relative;

  display: flex;
  align-items: stretch;
`;

const appearFrame = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const SignUpContent = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    animation-name: ${appearFrame};
    animation-duration: 2s;
    padding: 10px 50px 60px;
    width: 420px;
    text-align: center;
    background: #fff;
    box-shadow: 0px 0px 20px -8px #e3e3e3;
    position: relative;
    overflow: hidden;

    h1 {
      margin-bottom: 34px;
      color: #194580;
    }

    button {
      width: 100%;
      margin-top: 40px;
      height: 48px;
      border: 0;
      font-size: 17px;
      font-weight: bold;
      color: #fff;
      background: linear-gradient(90deg, #aa076b, #61045f);
      box-shadow: 0px 9px 21px 0px #bf2182;

      &:hover {
        opacity: 0.85;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-weight: bold;
      color: #aa076b;

      margin-top: 50px;
      transition: color 0.2s;

      &:hover {
        color: #61045f;
      }

      svg {
        margin-right: 10px;
      }
    }

    .circle {
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(45deg, #aa076b, #61045f);
      top: -40px;
      right: -40px;
      opacity: 0.5;
    }
  }
`;

export const SignUpImage = styled.div`
  /* background: linear-gradient(90deg, #00d2ff, #3a7bd5); */
  background: linear-gradient(90deg, #aa076b, #61045f);
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 500;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.8);
  }

  h4 {
    max-width: 500px;
    margin-top: 30px;
    font-size: 15px;
    font-weight: 300;
    line-height: 24px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
  }

  img {
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Dots = styled.div`
  background: url(${DotsImage});

  width: 200px;
  height: 200px;
  position: absolute;
  z-index: 999;
`;
