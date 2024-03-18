import React, { CSSProperties, FC, HTMLAttributes, ReactChild } from 'react';
import { ProvideTheme } from '../ProvideTheme';
import { ButtonFilled, ButtonOutlined } from './styles';
import { Text } from '../Typography/Text';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  style?: CSSProperties;
  variant: 'filled' | 'outlined';
  size?: 'medium' | 'large';
  icon?: ReactChild;
  iconPosition?: 'left' | 'right';
}

export const Button: FC<Props> = ({
  children,
  variant,
  style,
  size,
  icon,
  iconPosition,
}) => {
  return (
    <ProvideTheme>
      {variant === 'filled' && (
        <ButtonFilled style={style} size={size} iconPosition={iconPosition}>
          {icon && iconPosition === 'left' && icon}
          <Text variant="label" level={1}>
            {children}
          </Text>
          {icon && iconPosition !== 'left' && icon}
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
