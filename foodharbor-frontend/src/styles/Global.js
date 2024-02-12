import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    font-family: "Inter", sans-serif;
    }
    :root{
        --white: #FFF;
        --black: #080808;
        --orange: #CE8B28;
        --yellow: #FFAD32;
        --gray: #F3F2F2;
        --red: #FF2400;
        --fadeRed: #FFCBCB;
    }
    body{
        color: var(--black);
        font-size: 1.2rem;
        font-weight: 400;
    }

    &:focus {
        outline: none;
    }
`;
