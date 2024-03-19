import styled from 'styled-components';

export const SpinnerComponent = styled.div<{
  size?: 'small' | 'medium' | 'large';
}>(({ theme, size }) => ({
  border: `2.5px solid rgba(0, 0, 0, 0.1)`,
  borderTop: `2.5px solid ${theme.button.primary.outline.label.disabled}`,
  borderRadius: `50%`,
  width: size === 'small' ? '12px' : size === 'medium' ? '14px' : '18px', // Set the width based on the size prop
  height: size === 'small' ? '12px' : size === 'medium' ? '14px' : '18px',
  animationName: `rotateAnimation`,
  animationDuration: `1s`,
  animationTimingFunction: `linear`,
  animationIterationCount: `infinite`,

  '@keyframes rotateAnimation': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
}));
// border: theme.button.border.primary.filled.focus,
// borderTop: theme.button.border.primary.outline.focus,