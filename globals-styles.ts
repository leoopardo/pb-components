import { createGlobalStyle } from 'styled-components';
import GothamPro from './assets/gotham/GothamPro-Medium.woff';
import Inter from './assets/inter/Inter-Medium.ttf';

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
