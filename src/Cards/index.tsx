import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { useTheme } from '../ThemeProvider';
import './styles.sass';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  header?: string;
}

export const BigNumber: FC<Props> = ({ header }) => {
  const theme = useTheme();
  return (
    <div className="pb-component-card" provided-theme={theme}>
      {header && <h1 className='pb-component-card-header'>{header}</h1>}
    </div>
  );
};
