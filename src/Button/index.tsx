import React, { CSSProperties, FC, HTMLAttributes, ReactChild } from 'react';
import { ProvideTheme } from '../ProvideTheme';
import { ButtonFilled, ButtonOutlined } from './styles';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  style?: CSSProperties;
  variant: 'filled' | 'outlined';
}

export const Button: FC<Props> = ({ children, variant, style }) => {
  return (
    <ProvideTheme>
      {variant === 'filled' && (
        <ButtonFilled style={style}>
          <h1>{children}</h1>
        </ButtonFilled>
      )}
      {variant === 'outlined' && (
        <ButtonOutlined>
          <h1>{children}</h1>
        </ButtonOutlined>
      )}
    </ProvideTheme>
  );
};
