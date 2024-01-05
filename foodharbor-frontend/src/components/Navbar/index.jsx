import React from "react";

import pizza from "./img/pizzaIcon.png";
import lanche from "./img/snackIcon.png";
import basket from "./img/basketIcon.png";
import drinks from "./img/drinksIcon.png";
import fastfood from "./img/fastfoodIcon.png";
import cake from "./img/cakeIcon.svg";
import sushi from "./img/sushiIcon.png";
import bread from "./img/breadIcon.png";

import { ContainerNav } from "./style";
import StyledLink from "../../styles/StyledLink"

const Navbar = () => {
  return (
    <ContainerNav>
      <StyledLink>
        <div className="itemWrapper">
          <div className="imgContainer">
            <img
              src={pizza}
              alt="pizza"
              style={{ width: 50, height: 50 }}
            />
          </div>
          <div className="txtContainer">
            <p>Pizza</p>
          </div>
        </div>
      </StyledLink>

      <StyledLink>
        <div className="itemWrapper">
          <div className="imgContainer">
            <img
              src={lanche}
              alt="lanches"
              style={{ width: 50, height: 50 }}
            />
          </div>
          <div className="txtContainer">
            <p>Lanches</p>
          </div>
        </div>
      </StyledLink>

      <StyledLink>
        <div className="itemWrapper">
          <div className="imgContainer">
            <img
              src={basket}
              alt="mercado"
              style={{ width: 50, height: 50 }}
            />
          </div>
          <div className="txtContainer">
            <p>Mercado</p>
          </div>
        </div>
      </StyledLink>

      <StyledLink>
        <div className="itemWrapper">
          <div className="imgContainer">
            <img
              src={drinks}
              alt="drinks"
              style={{ width: 50, height: 50 }}
            />
          </div>
          <div className="txtContainer">
            <p>Bebidas</p>
          </div>
        </div>
      </StyledLink>

      <StyledLink>
        <div className="itemWrapper">
          <div className="imgContainer">
            <img
              src={fastfood}
              alt="fastfood"
              style={{ width: 50, height: 50 }}
            />
          </div>
          <div className="txtContainer">
            <p>Fast Food</p>
          </div>
        </div>
      </StyledLink>

      <StyledLink>
        <div className="itemWrapper">
          <div className="imgContainer">
            <img
              src={cake}
              alt="cake"
              style={{ width: 50, height: 50 }}
            />
          </div>
          <div className="txtContainer">
            <p>Doces</p>
          </div>
        </div>
      </StyledLink>

      <StyledLink>
        <div className="itemWrapper">
          <div className="imgContainer">
            <img
              src={sushi}
              alt="sushi"
              style={{ width: 50, height: 50 }}
            />
          </div>
          <div className="txtContainer">
            <p>Sushi</p>
          </div>
        </div>
      </StyledLink>

      <StyledLink>
        <div className="itemWrapper">
          <div className="imgContainer">
            <img
              src={bread}
              alt="bread"
              style={{ width: 50, height: 50 }}
            />
          </div>
          <div className="txtContainer">
            <p>Padaria</p>
          </div>
        </div>
      </StyledLink>
    </ContainerNav>
  );
};

export default Navbar;
