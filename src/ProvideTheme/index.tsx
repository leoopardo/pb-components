import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../ThemeProvider';
import light from '../../styles/json/light.json';
import dark from '../../styles/json/dark.json';
import { GlobalStyle } from '../../globals-styles.ts';

export const ProvideTheme = ({ children }: any) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : (light as typeof dark)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
