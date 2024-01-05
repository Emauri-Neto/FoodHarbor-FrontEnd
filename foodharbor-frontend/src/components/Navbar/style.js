import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerNav = styled.div`
  display: flex;
  margin-inline: 40px;
  margin-top: 3%;
  justify-content: center;
  gap: 5%;

  .itemWrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .imgContainer{
      margin-bottom: 10%;
    }

    &:hover{
      color: var(--orange);
      cursor: pointer;
    }
  }
`;
