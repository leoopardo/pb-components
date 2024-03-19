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
  disabled?: boolean;
}

export const Button: FC<Props> = ({
  children,
  variant,
  style,
  size,
  icon,
  iconPosition,
  disabled,
}) => {
  return (
    <ProvideTheme>
      {variant === 'filled' && (
        <ButtonFilled
          style={style}
          size={size}
          iconPosition={iconPosition}
          disabled={disabled}
        >
          {icon && iconPosition === 'left' && icon}
          <Text variant="label" level={1} style={{ color: style?.color }}>
            {children}
          </Text>
          {icon && iconPosition !== 'left' && icon}
        </ButtonFilled>
      )}
      {variant === 'outlined' && (
        <ButtonOutlined
          style={style}
          size={size}
          iconPosition={iconPosition}
          disabled={disabled}
        >
          {icon && iconPosition === 'left' && icon}
          <Text variant="label" level={1}>
            {children}
          </Text>
          {icon && iconPosition !== 'left' && icon}
        </ButtonOutlined>
      )}
    </ProvideTheme>
  );
};
