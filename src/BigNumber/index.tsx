import React, { FC, HTMLAttributes, ReactChild } from 'react';
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
  currency?: boolean;
  icon?: ReactChild
}

export const BigNumber: FC<BigNumberProps> = ({
  label,
  value,
  total,
  status,
  style,
  currency,
  icon
}) => {
  return (
    <ProvideTheme>
      <StyledCard style={style}>
        <BgIcon status={status || 'default'}>
        {icon ??  <Icon name="ChevronRightIcon" />}
        </BgIcon>
        <TextContent>
          <BigNumberLabel>{label}</BigNumberLabel>
          {value && currency ? (
            <BigNumberValue>{moneyFormatter(value || 0)}</BigNumberValue>
          ) : value && !currency ? (
            <BigNumberValue>{numberFormatter(value || 0)}</BigNumberValue>
          ) : (
            <></>
          )}
          {total ? (
            <BigNumberTotal>
              Total: {numberFormatter(total || 0)}
            </BigNumberTotal>
          ) : (
            <></>
          )}
        </TextContent>
      </StyledCard>
    </ProvideTheme>
  );
};
