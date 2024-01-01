import React, { ChangeEvent, useState } from "react";
import { useAuth } from "../context/AuthContext";

import { Container, FormWrap } from "../styles/Login";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledLink from "../styles/StyledLink";

const Login = () => {
    let { Login } = useAuth();

    return (
        <Container>
            <FormWrap>
                <h1>Login</h1>
                <form onSubmit={Login}>
                    <div className="inputWrap">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input
                            type="email"
                            name="email"
                            placeholder="Ex.: teste@email.com"
                        />
                    </div>
                    <div className="inputWrap" style={{ marginBottom: "10%", }}>
                        <FontAwesomeIcon icon={faKey} />
                        <input
                            type="password"
                            name="password"
                            placeholder="Senha..."
                        />
                    </div>
                    <input
                        type="submit"
                        style={{ border: 0, margin: 0, cursor: "pointer", backgroundColor: "var(--orange)", color: "var(--white)", fontSize: "1.2rem" }}
                        value={"Entrar"}
                    />
                </form>
                <p>Não tem uma conta? <StyledLink className="linkButton">Cadastre-se</StyledLink></p>
            </FormWrap>
        </Container>
    )
}

export default Login;