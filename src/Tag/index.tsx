import React, { FC, HTMLAttributes } from 'react';
import { ProvideTheme } from '../ProvideTheme';
import { TagContent, TagLabel, TagStatus } from './styles';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  theme?: 'light' | 'dark';
  label?: string;
  status?: 'danger' | 'warning' | 'neutral' | 'default' | 'success';
  style?: React.CSSProperties;
}

export const Tag: FC<TagProps> = ({ label, style, status }) => {
  return (
    <ProvideTheme>
      <TagContent style={style}>
        <TagStatus status={status || 'default'} />
        <TagLabel>{label}</TagLabel>
      </TagContent>
    </ProvideTheme>
  );
};
