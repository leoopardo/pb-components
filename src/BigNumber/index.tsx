import React, { FC, HTMLAttributes } from 'react';
import { Icon } from '../Icon';
import { ProvideTheme } from '../ProvideTheme';
import { moneyFormatter } from '../utils/moneyFormatter';
import { numberFormatter } from '../utils/numberFormatter';
import {
  BgIcon,
  BigNumberLabel,
  BigNumberTotal,
  BigNumberValue,
  StyledCard,
  TextContent,
} from './styles';

export interface BigNumberProps extends HTMLAttributes<HTMLDivElement> {
  theme?: 'light' | 'dark';
  label?: string;
  status?: 'danger' | 'warning' | 'neutral' | 'default' | 'success';
  value?: number;
  total?: number;
  style?: React.CSSProperties;
}

export const BigNumber: FC<BigNumberProps> = ({
  label,
  value,
  total,
  status,
  style,
}) => {
  return (
    <ProvideTheme>
      <StyledCard style={style}>
        <BgIcon status={status || 'default'}>
          <Icon name="CurrencyDollarIcon" />
        </BgIcon>
        <TextContent>
          <BigNumberLabel>{label}</BigNumberLabel>
          <BigNumberValue>{moneyFormatter(value || 0)}</BigNumberValue>
          <BigNumberTotal>Total: {numberFormatter(total || 0)}</BigNumberTotal>
        </TextContent>
      </StyledCard>
    </ProvideTheme>
  );
};
