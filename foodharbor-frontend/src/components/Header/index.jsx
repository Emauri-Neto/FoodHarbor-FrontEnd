import React from "react";

import StyledLink from "../../styles/StyledStyledLink";

import LogoImg from "../../assets/Logo-FoodHarbor.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

import { ContainerHeader } from "./style";

const Header = () => {
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
      <label className="wrapper-buttons">
        <button className="button-address">
          <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 3 }} />
          Entrega:
        </button>
        <select name="user" className="button-user">
          <option value="">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "3px" }} />
            Usuario
          </option>
          <option value="test">Teste</option>
        </select>
        <button className="button-purchase">
          <FontAwesomeIcon icon={faBagShopping} style={{ marginRight: 3 }} />
          Sacola
        </button>
      </label>
    </ContainerHeader>
  );
};

export default Header;
