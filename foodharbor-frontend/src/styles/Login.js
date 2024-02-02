import { styled } from "styled-components";
import Banner from "../assets/banner.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .button-exit {
    margin-top: 21px;
    margin-left: 17px;
    width: 70px;
    height: 70px;
    padding: 10px;
    text-align: center;
    background-color: rgba(192, 192, 192, 0.28);
    color: rgba(255, 158, 68, 1);
    border: none;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      opacity: 80%;
    }
  }

  .wrapper {
    width: 100%;
  }
  .logo {
    height: 55px;
    width: 280px;
    margin-top: 5%;
    margin-right: 5%;
  }
  .wrapper-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20%;
  }
  .wrapper-login h1 {
    font-size: 77px;
    font-family: "Inter", sans-serif;
  }
  .wrapper-login label {
    font-size: 15px;
    color: rgba(0, 0, 0, 1);
    align-self: flex-start;
    margin-left: 26%;
    font-family: "Inter", sans-serif;
  }
  .wrapper-login .input-login {
    width: 456px;
    height: 36px;
    border-radius: 7px;
    font-size: 20px;
    padding-left: 10px;
    margin: 10px 10px;
    color: #000;
    outline: none;
    border-color: rgba(0, 0, 0, 0.25);
    background-color: rgba(5, 5, 5, 0.06);
    &::placeholder {
      color: rgba(211, 206, 206, 1);
    }
  }
  .wrapper-login .button-enter {
    width: 456px;
    height: 45px;
    border-radius: 5px;
    border: none;
    background-color: #c85d21;
    color: #fff;
    font-size: 24px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .wrapper-login .button-enter:hover {
    background-color: #ff9c65;
  }
  .error {
    margin-top: 10px;
    margin-bottom: 14px;
    color: #ff0000;
    border: solid 1px #ff0000;
    padding: 10px;
  }
  .remember {
    display: flex;
    align-items: baseline;
    margin-bottom: 10px;
  }
  .remember p {
    margin-right: 136px;
  }
  .highlight {
    &:hover {
      opacity: 50%;
    }
  }
  .banner {
    width: 100%;
    height: 100vh;
    background-image: url(${Banner});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: end;
  }
  .login-with {
    margin-top: 30px;
  }
  .login-with p {
    font-size: 32px;
    text-align: center;
    margin-bottom: 12px;
  }
  .button-face {
    width: 221px;
    height: 45px;
    border: solid 1px rgba(60, 90, 153, 1);
    border-radius: 4px;
    color: rgba(60, 90, 153, 1);
    margin-right: 10px;
    font-size: 32px;
    background: #fff;
    &:hover {
      opacity: 50%;
    }
  }

  .button-google {
    width: 221px;
    height: 45px;
    border: solid 1px rgba(214, 83, 27, 1);
    border-radius: 4px;
    color: rgba(214, 83, 27, 1);
    font-size: 32px;
    background: #fff;
    &:hover {
      opacity: 50%;
    }
  }
`;
