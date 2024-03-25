import React, {
  CSSProperties,
  FC,
  HTMLAttributes,
  ReactChild,
  useState,
} from 'react';
import { ProvideTheme } from '../ProvideTheme';
import {
  ButtonFilled,
  ButtonOutlined,
  ButtonSecondary,
  RotateAnimationDiv,
} from './styles';
import { Text } from '../Typography/Text';
import { Spinner } from '../Spinner';
import { Icon } from '../Icon';

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  style?: CSSProperties;
  variant: 'filled' | 'outlined' | 'secondary';
  size?: 'medium' | 'large';
  icon?: ReactChild;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: any) => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  style,
  size,
  icon,
  iconPosition,
  disabled,
  loading,
  onClick,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <ProvideTheme>
      {variant === 'filled' && (
        <ButtonFilled
          style={style}
          size={size}
          iconPosition={iconPosition}
          disabled={disabled}
          loading={loading}
          onClick={onClick}
        >
          {icon && iconPosition === 'left' && !loading && icon}
          {loading && iconPosition === 'left' && <Spinner size="small" />}
          <Text variant="label" level={1} style={{ color: style?.color }}>
            {children}
          </Text>
          {icon && iconPosition !== 'left' && !loading && icon}
          {loading && iconPosition !== 'left' && <Spinner size="small" />}
        </ButtonFilled>
      )}
      {variant === 'outlined' && (
        <ButtonOutlined
          style={style}
          size={size}
          iconPosition={iconPosition}
          disabled={disabled}
          loading={loading}
          onClick={onClick}
        >
          {icon && iconPosition === 'left' && !loading && icon}
          {loading && iconPosition === 'left' && <Spinner size="small" />}
          <Text variant="label" level={1} inherit>
            {children}
          </Text>
          {icon && iconPosition !== 'left' && !loading && icon}
          {loading && iconPosition !== 'left' && <Spinner size="small" />}
        </ButtonOutlined>
      )}
      {variant === 'secondary' && (
        <ButtonSecondary
          style={style}
          size={size}
          iconPosition={iconPosition}
          disabled={disabled}
          loading={loading}
          onClick={(e: any) => {
            setIsCollapsed(!isCollapsed);
            onClick && onClick(e);
          }}
        >
          {icon && !loading && icon}
          {loading && <Spinner size="small" />}
          <Text variant="label" level={1}>
            {children}
          </Text>
          <RotateAnimationDiv collapsed={isCollapsed}>
            <Icon name="ChevronDownIcon" />
          </RotateAnimationDiv>
        </ButtonSecondary>
      )}
    </ProvideTheme>
  );
};
