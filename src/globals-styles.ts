import { createGlobalStyle } from 'styled-components';
import GothamPro from './assets/fonts/gotham/gotham.woff';
import Inter from './assets/fonts/inter/inter.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GothamPro';
        src: local('Font Name'), local('FontName'),
        url(${GothamPro}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }@font-face {
        font-family: 'Inter';
        src: local('Font Name'), local('FontName'),
        url(${Inter}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
