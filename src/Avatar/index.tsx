import React, { FC, HTMLAttributes } from 'react';
import { ProvideTheme } from '../ProvideTheme';
import { AvatarImg, AvatarText } from './styles';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  children?: string;
  size?: 'sm' | 'md' | 'lg' | 'xlg';
  shape?: 'circle' | 'square';
  src?: string;
  onClick?: (event: any) => void;
  theme?: 'light' | 'dark';
}

export const Avatar: FC<AvatarProps> = ({
  children,
  size,
  shape,
  src,
  onClick,
}) => {
  return (
    <ProvideTheme>
      {src ? (
        <AvatarImg size={size} shape={shape} src={src} onClick={onClick} />
      ) : (
        <AvatarText size={size} shape={shape} onClick={onClick}>
          {children && children?.split(' ').length > 1
            ? `${children?.substring(0, 1)}${children?.split(' ')[children?.split(' ').length - 1].substring(0, 1)}`
            : children?.split(' ').length === 1
              ? children.substring(0, 1)
              : ''}
        </AvatarText>
      )}
    </ProvideTheme>
  );
};
