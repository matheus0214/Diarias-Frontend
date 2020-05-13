import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  /* background: linear-gradient(-90deg, #b489f7, #41cfe7); */
  background: #fcfcfc;

  display: flex;
  align-items: stretch;
`;

export const SignInContent = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    padding: 60px 40px;
    width: 400px;
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
      background: linear-gradient(90deg, #00d2ff, #3a7bd5);
      box-shadow: 0px 9px 21px 0px #7babed;

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
      color: #00d2ff;

      margin-top: 50px;
      transition: color 0.2s;

      &:hover {
        color: #3a7bd5;
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
      background: linear-gradient(45deg, #00d2ff, #3a7bd5);
      top: -40px;
      right: -40px;
      opacity: 0.5;
    }
  }
`;

export const SignInImage = styled.div`
  background: linear-gradient(90deg, #00d2ff, #3a7bd5);

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
    width: 600px;
    height: 600px;
  }
`;
