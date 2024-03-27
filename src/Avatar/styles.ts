import styled from 'styled-components';

export const AvatarText = styled.div<{
  size?: 'sm' | 'md' | 'lg' | 'xlg';
  shape?: 'circle' | 'square';
}>(({ theme, size, shape }) => ({
  height:
    size === 'sm'
      ? theme.avatar.size.small
      : size === 'md'
        ? theme.avatar.size.medium
        : size === 'lg'
          ? theme.avatar.size.large
          : theme.avatar.size.xl,
  width:
    size === 'sm'
      ? theme.avatar.size.small
      : size === 'md'
        ? theme.avatar.size.medium
        : size === 'lg'
          ? theme.avatar.size.large
          : theme.avatar.size.xl,

  background: theme.avatar.bg.initials.default,
  borderRadius:
    shape === 'circle'
      ? '50%'
      : size === 'sm'
        ? theme.avatar.borderRadius.small
        : size === 'md'
          ? theme.avatar.borderRadius.medium
          : size === 'lg'
            ? theme.avatar.borderRadius.large
            : theme.avatar.borderRadius.xl,
  color: theme.avatar.fg.initials,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  font:
    size === 'sm'
      ? theme.avatar.typography.small
      : size === 'md'
        ? theme.avatar.typography.medium
        : size === 'lg'
          ? theme.avatar.typography.large
          : theme.avatar.typography.xl,
  textTransform: 'uppercase',
}));

export const AvatarImg = styled.img<{
  size?: 'sm' | 'md' | 'lg' | 'xlg';
  shape?: 'circle' | 'square';
}>(({ theme, size, shape }) => ({
  height:
    size === 'sm'
      ? theme.avatar.size.small
      : size === 'md'
        ? theme.avatar.size.medium
        : size === 'lg'
          ? theme.avatar.size.large
          : theme.avatar.size.xl,
  width:
    size === 'sm'
      ? theme.avatar.size.small
      : size === 'md'
        ? theme.avatar.size.medium
        : size === 'lg'
          ? theme.avatar.size.large
          : theme.avatar.size.xl,

  background: theme.avatar.bg.initials.default,
  borderRadius:
    shape === 'circle'
      ? '50%'
      : size === 'sm'
        ? theme.avatar.borderRadius.small
        : size === 'md'
          ? theme.avatar.borderRadius.medium
          : size === 'lg'
            ? theme.avatar.borderRadius.large
            : theme.avatar.borderRadius.xl,
}));
