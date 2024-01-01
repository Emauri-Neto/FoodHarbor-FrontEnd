import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 16px;
  gap: 10%;

  img {
    height: 55px;
    width: 280px;
  }

  .label-search {
    position: relative;
  }

  #input-search {
    width: 400px;
    height: 35px;

    padding: 0 8px;
    outline: none;

    border: 1px solid (0, 0, 0, 0.4);
    box-shadow: none;
  }

  .search {
    width: 80px;
    height: 35px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border: 1px solid (0, 0, 0, 0.4);
    border: none;
    color: #fff;
    background-color: #ea4544;
    cursor: pointer;
    letter-spacing: 0.5px;
  }
    ul{
      list-style: none;
      font-size: 1.2rem;
      margin-right: 4%;
      display: flex;
      gap: 8px;
      height: auto;

      #Info{
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--orange);
        border: 2px solid var(--orange);
        padding-inline: 6%;
        font-weight: 500;
        border-radius: 5px;
      }
      
      #Buttons{
        padding: 5%;
        margin-inline: 4%;
        border: 1px solid var(--orange);
        color: var(--orange);
        &:hover{
          color: var(--white);
          background-color: var(--orange);
        }
      }
    }
`;