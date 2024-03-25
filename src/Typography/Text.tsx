import React, { CSSProperties, FC, HTMLAttributes, ReactChild } from 'react';
import { ProvideTheme } from '../ProvideTheme';
import { Typography } from './styles';

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  variant: 'display' | 'head' | 'body' | 'label';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'regular' | 'medium' | 'bold';
  style?: CSSProperties;
  className?: string;
}

export const Text: FC<TextProps> = ({
  children,
  variant,
  level,
  weight,
  style,
}) => {
  return (
    <ProvideTheme>
      <Typography variant={variant} level={level} weight={weight} style={{...style}}>
        {children}
      </Typography>
    </ProvideTheme>
  );
};
