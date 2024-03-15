import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { ProvideTheme } from '../ProvideTheme';
import { Typography } from './styles';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  variant: 'display' | 'head' | 'body' | 'label';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Text: FC<Props> = ({ children, variant, level }) => {
  return (
    <ProvideTheme>
      <Typography variant={variant} level={level}>
        {children}
      </Typography>
    </ProvideTheme>
  );
};
