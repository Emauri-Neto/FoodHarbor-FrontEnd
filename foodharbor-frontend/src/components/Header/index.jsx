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
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

import { ContainerHeader } from "./style";
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

  let address = ['SAO PAULO']
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
        <ul>
          <li id="Info" style={{ fontSize: "1rem", width: 250 }}>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "10%" }}
            />
            Entrega: {address}
          </li>
          <li id="Info" style={{ fontSize: "1rem", }}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ marginRight: "25%" }}
            />
            <FontAwesomeIcon icon={faCaretDown} />
          </li>
          <li id="Info" style={{ fontSize: "1rem", }} onClick={Logout}>
            <FontAwesomeIcon
              icon={faBagShopping}
              style={{ marginRight: "15%" }}
            />
            Sacola
          </li>
        </ul>
      ) : (
        <ul>
          <StyledLink id="Buttons" to="/login">
            <span>
              Entrar
            </span>
          </StyledLink>
          <StyledLink id="Buttons">
            <span>
              Registrar
            </span>
          </StyledLink>
        </ul>
      )}

    </ContainerHeader>
  );
};

export default Header;
