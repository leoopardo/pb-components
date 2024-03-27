import React, { CSSProperties, FC, HTMLAttributes } from 'react';
import { ProvideTheme } from '../ProvideTheme';
import { SpinnerComponent } from './styles';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
}

export const Spinner: FC<SpinnerProps> = ({ style, size }) => {
  return (
    <ProvideTheme>
      <SpinnerComponent style={style} size={size} />
    </ProvideTheme>
  );
};
