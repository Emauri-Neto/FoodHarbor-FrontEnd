import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import LogoImg from "../assets/Logo-FoodHarbor.png";
import ButtonExit from "../assets/button-exit.png";

import { Container } from "../styles/Login";
import StyledLink from "../styles/StyledLink";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  const { Login } = useAuth();

  const isValidEmail = () => {
    const emailTeste = /^[^\s@]+@[^\s]+\.[^\s@]+$/;
    setError(emailTeste.test(email));
    if (error) {
      Login(email, password);
    }
  };

  return (
    <Container>
      <div className="wrapper">
        <div className="wrapper-login">
          <StyledLink to="/">
            <button className="button-exit">
              <img id="img-exit" src={ButtonExit} alt="" />
            </button>
          </StyledLink>

          <h1>LOGIN</h1>

          <label htmlFor="">Nome de usúario</label>
          <input
            type="text"
            className="input-login"
            placeholder="@email.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="">Senha</label>

          <input
            type="password"
            className="input-login"
            placeholder="Senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div className="remember">
            <input
              type="checkbox"
              name=""
              id=""
              style={{ marginRight: "5px" }}
            />
            <p>Remember me</p>
            <a
              href="#"
              className="highlight"
              style={{ color: "#FF9C65", textDecoration: "none" }}
            >
              Esqueceu a senha?
            </a>
          </div>

          <button className="button-enter" onClick={isValidEmail}>
            Entrar
          </button>
          {error ? null : (
            <p className="error">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                style={{ marginRight: "10px" }}
              />
              Usúario ou senha inválidas. Por favor, verifique seu e-mail e
              senha e tente novamente
            </p>
          )}
          <p>
            Não tem uma conta?
            <a
              href="#"
              className="highlight"
              style={{ color: "#FF9C65", marginLeft: "2px" }}
            >
              Crie uma conta
            </a>
          </p>
          <div className="login-with">
            <p>Logar com</p>
            <button className="button-face">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ marginRight: "10px" }}
              />
              Facebook
            </button>
            <button className="button-google">
              <FontAwesomeIcon
                icon={faGoogle}
                style={{ marginRight: "10px" }}
              />
              Google
            </button>
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={LogoImg} className="logo" alt="Logo FoodHarbor" />
      </div>
    </Container>
  );
};

export default Login;
