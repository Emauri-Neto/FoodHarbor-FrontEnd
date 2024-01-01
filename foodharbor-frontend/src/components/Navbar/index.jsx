import React from "react";

import pizza from "./img/pizzaIcon.png";
import lanche from "./img/snackIcon.png";
import basket from "./img/basketIcon.png";
import drinks from "./img/drinksIcon.png";
import fastfood from "./img/fastfoodIcon.png";
import cake from "./img/cakeIcon.svg";
import sushi from "./img/sushiIcon.png";
import bread from "./img/breadIcon.png";

import { ContainerNav, LinkNav } from "./style";

const Navbar = () => {
  return (
    <ContainerNav>
      <LinkNav to="/">
        <span>
          <img src={pizza} alt="" />
          <p>Pizza</p>
        </span>
      </LinkNav>
      <LinkNav to="/">
        <span>
          <img src={lanche} alt="" />
          <p>Lanches</p>
        </span>
      </LinkNav>
      <LinkNav to="/">
        <span>
          <img src={basket} alt="" />
          <p>Mercado</p>
        </span>
      </LinkNav>

      <LinkNav to="/">
        <span>
          <img src={drinks} alt="" />
          <p>Bebidas</p>
        </span>
      </LinkNav>
      <LinkNav to="/">
        <span>
          <img src={fastfood} alt="" className="fastFoodImg" />
          <p>Fast Food</p>
        </span>
      </LinkNav>

      <LinkNav to="/">
        <span>
          <img src={cake} alt="" />
          <p>Doces</p>
        </span>
      </LinkNav>
      <LinkNav to="/">
        <span>
          <img src={sushi} alt="" />
          <p>Sushi</p>
        </span>
      </LinkNav>

      <LinkNav to="/">
        <span>
          <img src={bread} alt="" />
          <p>Padaria</p>
        </span>
      </LinkNav>
    </ContainerNav>
  );
};

export default Navbar;
