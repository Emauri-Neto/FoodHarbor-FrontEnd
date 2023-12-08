import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --white: #FFF;
        --black: #080808;
    }
    body{
        color: var(--black);
        font-size: 1.2rem;
        font-weight: 400;
    }
`;