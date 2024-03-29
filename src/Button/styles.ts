import styled from 'styled-components';

export const ButtonFilled = styled.button<{
  size?: 'medium' | 'large';
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
}>(({ theme, size, iconPosition, disabled, loading }) => ({
  width: '100%',
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
      ? 8
      : theme.button.primary.padding.medium[`icon-${iconPosition ?? 'off'}`]
          .gap,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.button['border-radius'],
  border: 'none',
  transition: `background-color, color ${theme.animation.duration['200']}, outline ${theme.animation.duration['50']}`,
  transitionTimingFunction: theme.animation.transition['ease-in'],
  textTransform: 'capitalize',
  overflow: 'hidden',
  '&:hover': {
    backgroundColor:
      disabled || loading
        ? theme.button.primary.filled.bg.disabled
        : theme.button.primary.filled.bg.hover,
    color:
      disabled || loading
        ? theme.button.primary.filled.label.disabled
        : theme.button.primary.filled.label.hover,
    cursor: loading ? 'progress' : disabled ? 'no-drop' : 'pointer',
  },
  '&:active': {
    backgroundColor:
      disabled || loading
        ? theme.button.primary.filled.bg.disabled
        : theme.button.primary.filled.bg.active,
    color:
      disabled || loading
        ? theme.button.primary.filled.label.disabled
        : theme.button.primary.filled.label.active,cursor: "grabbing"
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
  width: '100%',
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
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor:
      disabled || loading
        ? theme.button.primary.outline.bg.disabled
        : theme.button.primary.outline.bg.hover,
    color: disabled
      ? theme.button.primary.outline.label.disabled
      : theme.button.primary.outline.label.hover,
    cursor: loading ? 'progress' : disabled ? 'no-drop' : 'pointer',
  },
  '&:active': {
    backgroundColor:
      disabled || loading
        ? theme.button.primary.outline.bg.disabled
        : theme.button.primary.outline.bg.active,
    color:
      disabled || loading
        ? theme.button.primary.outline.label.disabled
        : theme.button.primary.outline.label.active,cursor: "grabbing"
  },
  '&:focus': {
    outline: !disabled && !loading && theme.button.border.primary.outline.focus,
    color:
      disabled || loading
        ? theme.button.primary.outline.label.disabled
        : theme.button.primary.outline.label.focus,
  },
}));

export const ButtonSecondary = styled.button<{
  size?: 'medium' | 'large';
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
}>(({ theme, iconPosition, disabled, loading, size }) => ({
  width: '100%',
  backgroundColor:
    disabled || loading
      ? theme.button.secondary.filled.bg.disabled
      : theme.button.secondary.filled.bg.default,
  outline:
    disabled || loading
      ? theme.button.border.secondary.disabled
      : theme.button.border.secondary.default,
  color:
    disabled || loading
      ? theme.button.secondary.filled.label.disabled
      : theme.button.secondary.filled.label.default,
  padding:
    size === 'large'
      ? theme.button.primary.padding.large[`icon-${iconPosition ?? 'off'}`]
          .padding
      : theme.button.primary.padding.medium[`icon-${iconPosition ?? 'off'}`]
          .padding,
  gap: theme.button.secondary.padding.medium[
    `icon-${iconPosition ? 'on' : 'off'}`
  ].gap,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.button['border-radius'],
  border: 'none',
  transition: `background-color ${theme.animation.duration['200']}, outline ${theme.animation.duration['200']}, color ${theme.animation.duration['200']}`,
  transitionTimingFunction: theme.animation.transition['ease-in'],
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor:
      disabled || loading
        ? theme.button.secondary.filled.bg.disabled
        : theme.button.secondary.filled.bg.hover,
    color: disabled
      ? theme.button.secondary.filled.label.disabled
      : theme.button.secondary.filled.label.hover,
    cursor: loading ? 'progress' : disabled ? 'no-drop' : 'pointer',
  },
  '&:active': {
    backgroundColor:
      disabled || loading
        ? theme.button.secondary.filled.bg.disabled
        : theme.button.secondary.filled.bg.active,
    color:
      disabled || loading
        ? theme.button.secondary.filled.label.disabled
        : theme.button.secondary.filled.label.active,
        cursor: "grabbing"
  },
  '&:focus': {
    outline: !disabled && !loading && theme.button.border.secondary.focus,
    color:
      disabled || loading
        ? theme.button.secondary.filled.label.disabled
        : theme.button.secondary.filled.label.focus,
  },
}));

export const SeccondaryCollapsedButtonList = styled.ul<{ collapsed: boolean }>(
  ({ theme, collapsed }) => ({
    position: 'unset',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 0,
    zIndex: 9999,
    animationName: collapsed ? 'collapse' : 'uncollapse',
    animationDuration: collapsed
      ? theme.animation.duration['500']
      : theme.animation.duration['100'],
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-in-out',
    width: '100%',
    marginTop: 8,
    backgroundColor: theme.button.secondary.filled.bg.hover,
    borderRadius: theme.button['border-radius'],

    '@keyframes uncollapse': {
      from: { maxHeight: '100%', opacity: theme.opacity['100'] },
      to: {
        maxHeight: 0,
        opacity: theme.opacity['transparent'],
        overflow: 'hidden',
        display: 'none',
      },
    },

    '@keyframes collapse': {
      from: {
        maxHeight: 0,
        opacity: theme.opacity['transparent'],
        overflow: 'hidden',
        display: 'none',
      },
      to: { maxHeight: 300, opacity: theme.opacity['100'] },
    },
  })
);
export const SeccondaryCollapsedButtonItem = styled.li<{
  disabled?: boolean;
  loading?: boolean;
  iconPosition?: 'left' | 'right';
  size?: 'medium' | 'large';
}>(({ theme, disabled, loading, iconPosition, size }) => ({
  margin: 0,
  backgroundColor:
    disabled || loading
      ? theme.button.secondary.filled.bg.disabled
      : theme.button.secondary.filled.bg.hover,

  color:
    disabled || loading
      ? theme.button.secondary.filled.label.disabled
      : theme.button.secondary.filled.label.default,
  padding:
    size === 'large'
      ? theme.button.primary.padding.large[`icon-${iconPosition ?? 'off'}`]
          .padding
      : theme.button.primary.padding.medium[`icon-${iconPosition ?? 'off'}`]
          .padding,
  gap: theme.button.secondary.padding.medium[
    `icon-${iconPosition ? 'on' : 'off'}`
  ].gap,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderRadius: theme.button['border-radius'],
  border: 'none',
  transition: `background-color ${theme.animation.duration['200']}, outline ${theme.animation.duration['200']}, color ${theme.animation.duration['200']}`,
  transitionTimingFunction: theme.animation.transition['ease-in'],
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor:
      disabled || loading
        ? theme.button.secondary.filled.bg.disabled
        : theme.button.secondary.filled.bg.active,
    color: disabled
      ? theme.button.secondary.filled.label.disabled
      : theme.button.secondary.filled.label.hover,
    cursor: loading ? 'progress' : disabled ? 'no-drop' : 'pointer',
  },
  '&:active': {
    backgroundColor:
      disabled || loading
        ? theme.button.secondary.filled.bg.disabled
        : theme.button.secondary.filled.bg.hover,
    color:
      disabled || loading
        ? theme.button.secondary.filled.label.disabled
        : theme.button.secondary.filled.label.active,
  },
  '&:focus': {
    outline: !disabled && !loading && theme.button.border.secondary.focus,
    color:
      disabled || loading
        ? theme.button.secondary.filled.label.disabled
        : theme.button.secondary.filled.label.focus,
  },
}));

export const RotateAnimationDiv = styled.div<{ collapsed: boolean }>(
  ({ collapsed }) => ({
    '@keyframes rotate': {
      from: {
        transform: 'rotateX(0deg)',
      },
      to: {
        transform: 'rotateX(-180deg)',
      },
    },
    '@keyframes unrotate': {
      from: {
        transform: 'rotateX(-180deg)',
      },
      to: {
        transform: 'rotateX(0deg)',
      },
    },

    animation: 'rotate 0.3s ease-in-out forwards',
    animationName: collapsed ? 'rotate' : 'unrotate',
    transition: 'transform 0.3s ease',
  })
);
