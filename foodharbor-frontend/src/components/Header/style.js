import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 16px;

  img {
    height: 55px;
    width: 230px;
    margin-left: 20px;
  }

  .label-search {
    position: relative;
  }

  #input-search {
    width: 400px;
    height: 35px;

    padding: 0 16px;
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
`;
