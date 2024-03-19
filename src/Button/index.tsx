import React, { CSSProperties, FC, HTMLAttributes, ReactChild } from 'react';
import { ProvideTheme } from '../ProvideTheme';
import { ButtonFilled, ButtonOutlined } from './styles';
import { Text } from '../Typography/Text';
import { Spinner } from '../Spinner';

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  style?: CSSProperties;
  variant: 'filled' | 'outlined';
  size?: 'medium' | 'large';
  icon?: ReactChild;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  style,
  size,
  icon,
  iconPosition,
  disabled,
  loading
}) => {
  return (
    <ProvideTheme>
      {variant === 'filled' && (
        <ButtonFilled
          style={style}
          size={size}
          iconPosition={iconPosition}
          disabled={disabled}
          loading={loading}
        >
          {icon && iconPosition === 'left' && !loading && icon}
          <Text variant="label" level={1} style={{ color: style?.color }}>
            {children}
          </Text>
          {icon && iconPosition !== 'left' && !loading && icon}
          {loading && <Spinner size='small'/>}
        </ButtonFilled>
      )}
      {variant === 'outlined' && (
        <ButtonOutlined
          style={style}
          size={size}
          iconPosition={iconPosition}
          disabled={disabled}
          loading={loading}
        >
          {icon && iconPosition === 'left' && !loading && icon}
          <Text variant="label" level={1}>
            {children}
          </Text>
          {icon && iconPosition !== 'left' && !loading &&  icon}
          {loading && <Spinner size='small'/>}
        </ButtonOutlined>
      )}
    </ProvideTheme>
  );
};
