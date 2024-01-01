import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    :root{
        --white: #FFF;
        --black: #080808;
        --orange: #ea4544;
    }
    body{
        color: var(--black);
        font-size: 1.2rem;
        font-weight: 400;
    }
`;
