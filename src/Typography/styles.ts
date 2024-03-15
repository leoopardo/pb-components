import styled from 'styled-components';

const BodySizes: any = {
  1: '24',
  2: '20',
  3: '16',
  4: '14',
  5: '12',
  6: '12',
};

const labelSizes: any = {
  1: '16',
  2: '14',
  3: '12',
  4: '12',
  5: '12',
  6: '12',
};

export const Typography = styled.h1<{
  variant: 'display' | 'head' | 'body' | 'label';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}>(({ theme, variant, level }) => ({
  fontFamily: ['display', 'head', 'label'].includes(variant)
    ? 'GothamPro'
    : 'Inter',
  fontSize:
    variant === 'display'
      ? theme['font-size'].display.sm
      : variant === 'head'
      ? theme['font-size'][`h${level}`]
      : variant === 'body'
      ? theme['font-size'][BodySizes[level as any]]
      : theme['font-size'][labelSizes[level as any]],
  fontWeight:
    variant === 'display'
      ? theme['font-size'].display
      : variant === 'head' && level && level > 6
      ? theme['font-weight'].title.bold
      : variant === 'head'
      ? theme['font-weight'].title.medium
      : variant === 'label'
      ? theme['font-weight'].label
      : theme['font-weight'].body.regular,
}));
