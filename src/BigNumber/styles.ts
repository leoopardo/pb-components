import styled from 'styled-components';

export const StyledCard = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.bignumber.padding.desktop,
  gap: theme.bignumber.gap.value,
  backgroundColor: theme.bignumber.bg.content,
  borderRadius: theme.bignumber.borderRadius.content,
  border: theme.bignumber.border.default,
  color: theme.bignumber.fg.value,
  width: 'fit-content',
}));

export const BgIcon = styled.div<{
  status: 'danger' | 'warning' | 'neutral' | 'default' | 'success';
}>(({ theme, status }) => ({
  height: theme.bignumber.size.icon.bg,
  width: theme.bignumber.size.icon.bg,
  backgroundColor: theme.bignumber.bg.icon.content[status],
  borderRadius: theme.bignumber.borderRadius.icon,
  color: theme.bignumber.bg.icon.color[status],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const TextContent = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: theme.bignumber.gap.value,
}));

export const BigNumberLabel = styled.p(({ theme }) => ({
  color: theme.bignumber.fg.value,
  font: theme.bignumber.total.value,
  width: '100%',
  textTransform: 'capitalize',
  margin: 0,
  wordBreak: 'break-all',
  hyphens: 'auto',
}));

export const BigNumberValue = styled.p(({ theme }) => ({
  color: theme.bignumber.fg.value,
  font: theme.bignumber.text.value,
  width: '100%',
  margin: 0,
  wordBreak: 'break-all',
  hyphens: 'auto',
}));

export const BigNumberTotal = styled.p(({ theme }) => ({
  padding: theme.bignumber.padding.total,
  gap: theme.bignumber.gap.total,
  color: theme.bignumber.bg.total.text,
  borderRadius: theme.bignumber.borderRadius.icon,
  border: theme.bignumber.border.total.default,
  font: theme.bignumber.total.value,
  margin: 0,
  paddingTop: 2,
  paddingBottom: 2,
  wordBreak: 'break-all',
  hyphens: 'auto',
}));
