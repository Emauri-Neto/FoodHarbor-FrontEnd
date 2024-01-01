import React, { useState } from "react";

import StyledLink from "../../styles/StyledLink"

import LogoImg from "../../assets/Logo-FoodHarbor.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faUser,
  faBagShopping,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { ContainerHeader, UnauthenticatedMenu } from "./style";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  let { Logout, user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const handleLogout = async () => {
    try {
      await Logout();
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <ContainerHeader>
      <StyledLink to="/">
        <img src={LogoImg} alt="Logo FoodHarbor" />
      </StyledLink>

      <label className="label-search">
        <input
          type="text"
          placeholder="Buscar um restaurante..."
          id="input-search"
        />
        <button className="search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ marginRight: 3 }}
          />
          Buscar
        </button>
      </label>
      {user ? (
        <label className="wrapper-buttons">
          <button className="button-address">
            <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 3 }} />
            Entrega:
          </button>
          <button className="button-purchase" onClick={handleLogout}>
            Sair
          </button>
          <button className="button-purchase">
            <FontAwesomeIcon icon={faBagShopping} style={{ marginRight: 3 }} />
            Sacola
          </button>
        </label>
      ) : (
        <UnauthenticatedMenu>
          <label className="wrapper-buttons">
            <StyledLink to="/login">
              <button className="button-address" style={{ backgroundColor: "var(--white", fontSize: "1.2rem", cursor: "pointer" }}>
                Entrar
              </button>
            </StyledLink>
            <StyledLink to="/login">
              <button className="button-address" style={{ backgroundColor: "var(--white", fontSize: "1.2rem", cursor: "pointer" }}>
                Cadastrar
              </button>
            </StyledLink>
          </label>
        </UnauthenticatedMenu>
      )}

    </ContainerHeader>
  );
};

export default Header;
