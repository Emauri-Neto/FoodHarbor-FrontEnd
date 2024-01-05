import React, { useState, useEffect, useRef } from "react";

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
  let { user, Logout } = useAuth();
  const navigate = useNavigate();
  const userIconRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let address = ['SAO PAULO']
  const handleLogout = async () => {
    try {
      await Logout();
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  useEffect(() => {
    if (userIconRef.current) {
      const rect = userIconRef.current.getBoundingClientRect();
      const dropdown = document.getElementById("user-dropdown");

      if (dropdown) {
        dropdown.style.top = `${rect.bottom}px`;
        dropdown.style.left = `${rect.left}px`;
      }
    }
  }, [menuOpen]);

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
          {/* TEM QUE CONSERTAR ISSO AQUI MAIS TARDE */}
          <li id="Info" style={{ fontSize: "1rem", width: 250 }}>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "10%" }}
            />
            Entrega: {address}
          </li>
          <li
            id="Info"
            style={{ fontSize: "1rem", }}
            onMouseEnter={handleToggleMenu}
            onMouseLeave={handleToggleMenu}
            ref={userIconRef}
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{ marginRight: "25%" }}

            />
            <FontAwesomeIcon icon={faCaretDown} />
            {menuOpen && (
              <div
                id="user-dropdown"
                className="dropdownMenu"
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: 0,
                  }}
                >
                  <li id="dropdownItem" style={{marginTop: 5}}>Pedidos</li>
                  <li id="dropdownItem">Favoritos</li>
                  <li id="dropdownItem">Perfil</li>
                  <li id="dropdownItem">Meus Endereços</li>
                  <hr />
                  <li onClick={handleLogout} id="dropdownItem" style={{marginTop: 0, marginBottom: 7}}>Sair</li>
                </ul>
              </div>
            )}

          </li>
          <li id="Info" style={{ fontSize: "1rem", }}>
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
