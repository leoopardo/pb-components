import React, {
  CSSProperties,
  FC,
  HTMLAttributes,
  ReactChild,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ProvideTheme } from '../ProvideTheme';
import {
  ButtonFilled,
  ButtonOutlined,
  ButtonSecondary,
  RotateAnimationDiv,
  SeccondaryCollapsedButtonItem,
  SeccondaryCollapsedButtonList,
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
  buttonList?: {
    label?: string;
    onClick?: (event: any) => void;
    disabled?: boolean;
    loading?: boolean;
    icon?: ReactChild;
    iconPosition?: 'left' | 'right';
  }[];
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
  buttonList,
  onClick,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const buttonRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsCollapsed(false);
    }
  };

  // Add click event listener when component mounts
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <ProvideTheme>
      {variant === 'filled' && (
        <ButtonFilled
          style={style}
          size={size}
          iconPosition={iconPosition}
          disabled={disabled}
          loading={loading}
          onClick={() => onClick && !disabled && !loading && onClick}
        >
          {icon && iconPosition === 'left' && !loading && icon}
          {loading && iconPosition === 'left' && <Spinner size="small" />}
          <Text
            variant="label"
            level={1}
            style={{ color: style?.color }}
            inherit
          >
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
          onClick={() => onClick && !disabled && !loading && onClick}
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
        <div style={{ width: '100%' }}>
          <ButtonSecondary
            ref={buttonRef}
            style={style}
            size={size}
            iconPosition={iconPosition}
            disabled={disabled}
            loading={loading}
            onClick={(e: any) => {
              !disabled && !loading && setIsCollapsed(!isCollapsed);
              onClick && !disabled && !loading && onClick(e);
            }}
          >
            {icon && !loading && icon}
            {loading && <Spinner size="small" />}
            <Text variant="label" level={1} inherit>
              {children}
            </Text>
            <RotateAnimationDiv collapsed={isCollapsed}>
              <Icon name="ChevronDownIcon" />
            </RotateAnimationDiv>
          </ButtonSecondary>

          <SeccondaryCollapsedButtonList collapsed={isCollapsed} style={style}>
            {buttonList?.map((button) => (
              <SeccondaryCollapsedButtonItem
                disabled={button.disabled}
                loading={button.loading}
                iconPosition={button.iconPosition}
                onClick={button.onClick}
              >
                {button.icon &&
                  button.iconPosition !== 'right' &&
                  !button.loading &&
                  button.icon}
                {button.iconPosition !== 'right' && button.loading && (
                  <Spinner size="small" />
                )}
                <Text variant="label" level={3}>
                  {button?.label}
                </Text>
                {button.icon &&
                  button.iconPosition === 'right' &&
                  !button.loading &&
                  button.icon}
                {button.iconPosition === 'right' && button.loading && (
                  <Spinner size="small" />
                )}
              </SeccondaryCollapsedButtonItem>
            ))}
          </SeccondaryCollapsedButtonList>
        </div>
      )}
    </ProvideTheme>
  );
};
