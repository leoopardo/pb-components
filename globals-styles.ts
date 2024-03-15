import { createGlobalStyle } from 'styled-components';
import GothamPro from './assets/gotham/GothamPro-Medium.woff';

export const GlobalStyle =  createGlobalStyle`
    @font-face {
        font-family: 'GothamPro';
        src: local('Font Name'), local('FontName'),
        url(${GothamPro}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
