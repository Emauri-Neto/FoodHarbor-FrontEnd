import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-around;
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
  .wrapper-buttons {
    display: flex;
    gap: 10px;
    margin-right: 5px;
    margin-right: 10px;
  }
  .button-address {
    width: 89px;
    height: 39px;
    border-radius: 5px;
    border: 1px solid #ea4544;
    color: #ea4544;
  }
  .button-user {
    height: 39px;
    border-radius: 5px;
    border: 1px solid #ea4544;
    outline: none;
    color: #ea4544;
  }
  .button-purchase {
    width: 89px;
    height: 39px;
    border-radius: 5px;
    border: 1px solid #ea4544;
    color: #ea4544;
  }
  .menuDropdownItems {
    width: 300%;
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    padding: 10px;
    background-color: var(--white);
    border: 1px solid var(--gray);

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const UnauthenticatedMenu = styled.div`
  margin-right: 5%;
  
  ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 15%;
  }

  .button{
    padding: 10%;
    border-radius: 5px;
    border: 1px solid #ea4544;
    color: #ea4544;
  }
`;
