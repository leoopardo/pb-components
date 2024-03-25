import { createGlobalStyle,  } from 'styled-components';
import GothamPro from './fonts/gotham/gotham.ttf';
import Inter from './fonts/inter/inter.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GothamPro';
        src: url(${GothamPro}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${Inter}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
