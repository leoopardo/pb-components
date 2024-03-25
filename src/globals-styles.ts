import { createGlobalStyle,  } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GothamPro';
        src: url('/fonts/gotham.ttf') format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/inter.ttf') format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
