import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { ProvideTheme } from '../ProvideTheme';
import { useTheme } from '../ThemeProvider';
import { StyledCard } from './styles';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  header?: string;
}

export const BigNumber: FC<Props> = ({ header }) => {
  const { theme } = useTheme();
  return (
    <ProvideTheme>
      <StyledCard provided-theme={theme}>
        {header && <h1 className="pb-component-card-header">{header}</h1>}
      </StyledCard>
    </ProvideTheme>
  );
};
