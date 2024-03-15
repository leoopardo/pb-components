import styled from 'styled-components';

export const ButtonFilled = styled.div(({ theme }) => ({
  backgroundColor: theme.button.primary.filled.bg.default,
  padding: theme.button.primary.padding.large["icon-right"].padding,
  gap: theme.button.primary.padding.large["icon-right"].gap,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.button["border-radius"],
}));

export const ButtonOutlined = styled.div(({ theme }) => ({
   backgroundColor: theme.button.primary.outline.bg.default,
  padding: theme.button.primary.padding.large["icon-right"].padding,
  gap: theme.button.primary.padding.large["icon-right"].gap,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.button["border-radius"],
}));
