import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerNav = styled.div`
  display: flex;
  margin: 40px;
  justify-content: center;
`;
export const LinkNav = styled(Link)`
  width: 50%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  text-decoration: none;

  img {
    height: 50px;
    width: 55px;
  }

  span {
    color: #000;
    &:hover {
      color: #ea4544;
    }
  }
`;
