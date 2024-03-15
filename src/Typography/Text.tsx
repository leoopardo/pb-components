import React, { CSSProperties, FC, HTMLAttributes, ReactChild } from 'react';
import { ProvideTheme } from '../ProvideTheme';
import { Typography } from './styles';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  variant: 'display' | 'head' | 'body' | 'label';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'regular' | 'medium' | 'bold';
  style?: CSSProperties;
}

export const Text: FC<Props> = ({
  children,
  variant,
  level,
  weight,
  style,
}) => {
  return (
    <ProvideTheme>
      <Typography variant={variant} level={level} weight={weight} style={style}>
        {children}
      </Typography>
    </ProvideTheme>
  );
};
