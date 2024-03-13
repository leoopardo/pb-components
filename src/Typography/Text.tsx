import React, { FC, HTMLAttributes } from 'react';
import { useTheme } from '../ThemeProvider';
import './styles.sass';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  type?: "display" | "head" | "body" | "label"
}

export const Text: FC<Props> = ({ type }) => {
  const theme = useTheme();
  return (
    type === "display" ? <h1 className="pb-component-text" provided-theme={theme}>Display Text</h1> :
  );
};
