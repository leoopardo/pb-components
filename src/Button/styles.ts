import styled from 'styled-components';

export const ButtonFilled = styled.button<{
  size?: 'medium' | 'large';
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
}>(({ theme, size, iconPosition, disabled, loading }) => ({
  backgroundColor:
    disabled || loading
      ? theme.button.primary.filled.bg.disabled
      : theme.button.primary.filled.bg.default,
  color:
    disabled || loading
      ? theme.button.primary.filled.label.disabled
      : theme.button.primary.filled.label.default,
  padding:
    size === 'large'
      ? theme.button.primary.padding.large[`icon-${iconPosition ?? 'off'}`]
          .padding
      : theme.button.primary.padding.medium[`icon-${iconPosition ?? 'off'}`]
          .padding,
  gap:
    size === 'large'
      ? theme.button.primary.padding.large[`icon-${iconPosition ?? 'off'}`].gap
      : theme.button.primary.padding.medium[`icon-${iconPosition ?? 'off'}`]
          .gap,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.button['border-radius'],
  border: 'none',
  transition: `background-color, color ${theme.animation.duration['200']}, outline ${theme.animation.duration['50']}`,
  transitionTimingFunction: theme.animation.transition['ease-in'],
  '&:hover': {
    backgroundColor:
      disabled || loading
        ? theme.button.primary.filled.bg.disabled
        : theme.button.primary.filled.bg.hover,
    color:
      disabled || loading
        ? theme.button.primary.filled.label.disabled
        : theme.button.primary.filled.label.hover,
    cursor: disabled || loading ? 'no-drop' : 'pointer',
  },
  '&:active': {
    backgroundColor:
      disabled || loading
        ? theme.button.primary.filled.bg.disabled
        : theme.button.primary.filled.bg.active,
    color:
      disabled || loading
        ? theme.button.primary.filled.label.disabled
        : theme.button.primary.filled.label.active,
  },
  '&:focus': {
    outline: !disabled && !loading && theme.button.border.primary.filled.focus,
    color:
      disabled || loading
        ? theme.button.primary.filled.label.disabled
        : theme.button.primary.filled.label.focus,
  },
}));

export const ButtonOutlined = styled.button<{
  size?: 'medium' | 'large';
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
}>(({ theme, size, iconPosition, disabled, loading }) => ({
  backgroundColor:
    disabled || loading
      ? theme.button.primary.outline.bg.disabled
      : theme.button.primary.outline.bg.default,
  outline:
    disabled || loading
      ? theme.button.border.primary.outline.disabled
      : theme.button.border.primary.outline.default,
  color:
    disabled || loading
      ? theme.button.primary.outline.label.disabled
      : theme.button.primary.outline.label.default,
  padding:
    size === 'large'
      ? theme.button.primary.padding.large[`icon-${iconPosition ?? 'off'}`]
          .padding
      : theme.button.primary.padding.medium[`icon-${iconPosition ?? 'off'}`]
          .padding,
  gap:
    size === 'large'
      ? theme.button.primary.padding.large[`icon-${iconPosition ?? 'off'}`].gap
      : theme.button.primary.padding.medium[`icon-${iconPosition ?? 'off'}`]
          .gap,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.button['border-radius'],
  border: 'none',
  transition: `background-color ${theme.animation.duration['200']}, outline ${theme.animation.duration['200']}, color ${theme.animation.duration['200']}`,
  transitionTimingFunction: theme.animation.transition['ease-in'],
  '&:hover': {
    backgroundColor:
      disabled || loading
        ? theme.button.primary.outline.bg.disabled
        : theme.button.primary.outline.bg.hover,
    color: disabled
      ? theme.button.primary.outline.label.disabled
      : theme.button.primary.outline.label.hover,
    cursor: disabled || loading ? 'no-drop' : 'pointer',
  },
  '&:active': {
    backgroundColor:
      disabled || loading
        ? theme.button.primary.outline.bg.disabled
        : theme.button.primary.outline.bg.active,
    color:
      disabled || loading
        ? theme.button.primary.outline.label.disabled
        : theme.button.primary.outline.label.active,
  },
  '&:focus': {
    outline: !disabled && !loading && theme.button.border.primary.outline.focus,
    color: disabled || loading
    ? theme.button.primary.outline.label.disabled
    : theme.button.primary.outline.label.focus,
  },
}));
