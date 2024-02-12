import React, { useState } from 'react';
import { Container, LeftBox, RightBox, Button } from '../styles/Register'

import { useNavigate } from "react-router-dom";

import Logo from '../assets/Logo-FoodHarbor.png'
import ExitIcon from '../assets/button-exit.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { useAuth } from "../context/AuthContext"

const Register = () => {
    const { Register } = useAuth();

    //auth inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate()

    //password type change
    const [show1, setShow1] = useState()
    const [show2, setShow2] = useState()

    const handleTogglePassword = () => {
        setShow1(!show1)
    }
    const handleTogglePassword2 = () => {
        setShow2(!show2)
    }

    // error handling

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    //Sending data

    const isValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        setError(false);
        if (!isValidEmail(email)) {
            setError(true);
            setErrorMessage('Por favor, insira um email válido');
            return;
        }

        if (!firstName.trim() || !lastName.trim()) {
            setError(true);
            setErrorMessage('Por favor, preencha todos os campos');
            return;
        }

        if (!password.trim() || !confirmPassword.trim()) {
            setError(true);
            setErrorMessage('Por favor, preencha com uma senha');
            return;
        }

        if (password !== confirmPassword) {
            setError(true);
            setErrorMessage('As senhas não coincidem');
            return;
        }

        setError(false)
        setErrorMessage('')
        Register(email, password, firstName, lastName);
    }

    return (
        <>
            <Container>
                <LeftBox>
                    <Button onClick={() => { navigate("/") }}>
                        <img src={ExitIcon} alt="exit-icon-button" />
                    </Button>
                    <h1>Crie sua Conta</h1>
                    <form action="" onSubmit={handleRegister}>
                        <div className="fields">
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <div className="nameBox">
                                <input
                                    type="text"
                                    placeholder='Primeiro nome'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder='Ultimo nome'
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="passwordBox">
                                <input
                                    type={show1 ? 'text' : 'password'}
                                    placeholder="Crie sua senha"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    style={{ width: "100%" }}
                                />
                                <span onClick={handleTogglePassword}>
                                    <FontAwesomeIcon icon={faEye} />
                                </span>
                            </div>
                            <div className="passwordBox">
                                <input
                                    type={show2 ? 'text' : 'password'}
                                    placeholder="Confirme sua senha"
                                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                                    style={{ width: "100%" }}
                                />
                                <span onClick={handleTogglePassword2}>
                                    <FontAwesomeIcon icon={faEye} />
                                </span>
                            </div>
                            {error && (
                                <div className="errorBox">
                                    <FontAwesomeIcon
                                        icon={faCircleExclamation}
                                        style={{
                                            paddingRight: 10,
                                        }}
                                    />
                                    <p>{errorMessage}</p>
                                </div>
                            )}

                            <input
                                type="submit"
                                value="Registre-se"
                                id="submitBtn"
                            />
                        </div>
                    </form>
                    <p className='socialTxtId'>Registre-se com</p>
                    <div className="socialBox">
                        <button
                            className='socialButton'
                            style={{
                                borderColor: "var(--orange)",
                                color: "var(--orange)",
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faGoogle}
                                style={{ marginRight: "10px" }}
                            />
                            Google
                        </button>
                        <button
                            className='socialButton'
                            style={{
                                borderColor: "#5C80FF",
                                color: "#5C80FF",
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                style={{ marginRight: "10px" }}
                            />
                            Facebook
                        </button>
                    </div>
                </LeftBox>

                <RightBox>
                    <img src={Logo} alt="Logo" width={500} height={100} />
                </RightBox>
            </Container>
        </>
    )
}

export default Register;