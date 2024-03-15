import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../ThemeProvider';
import light from '../../styles/json/light.json';
import dark from '../../styles/json/dark.json';
import { StyledCard } from './styles';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  header?: string;
}

export const BigNumber: FC<Props> = ({ header }) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <StyledCard provided-theme={theme}>
        {header && <h1 className="pb-component-card-header">{header}</h1>}
      </StyledCard>
    </ThemeProvider>
  );
};
