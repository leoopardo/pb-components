import React, { FC, HTMLAttributes, ReactChild } from 'react';
import './styles.sass';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  Title?: string | HTMLElement;
}

export const BigNumber: FC<Props> = ({ title }) => {
  return <div className="pb-component-card">{title && <h1>{title} kkk</h1>}</div>;
};
