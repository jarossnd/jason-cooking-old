import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --tan: #FFECD1;
        --orange: #FF7D00;
        --black: #001524;
        --blue: #15616D;
        --red: #78290F;
        --white: #FFFFFF;
    }

    html {
        font-size 8px;
        background-color: var(--white);
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
        color: var(--black);
        line-height: 1.5;
        padding-right: 20px;
        padding-left: 20px;
    }

    h1 {
        text-align: center;
    }

    @media screen and (max-width: 760px) {
        body {
            padding-right: 10px;
            padding-left: 10px;
    }

`;

export default GlobalStyles;
