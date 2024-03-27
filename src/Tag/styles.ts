import styled from 'styled-components';

export const TagContent = styled.div(({ theme }) => ({
  width: 'fit-content',
  display: "flex",
  alignItems: "center",
  height: theme.tag.height.default,
  padding: theme.tag.padding,
  gap: theme.tag.gap,
  background: theme.tag.bg.default,
  border: theme.tag.border,
  borderRadius: theme.tag['border-radius'].default,
  stroke: theme.tag.stroke.default
}));

export const TagStatus = styled.p<{
  status?: 'danger' | 'warning' | 'neutral' | 'default' | 'success';
}>(({ theme, status }) => ({
  width: 8, height: 8,
  borderWidth: theme.tag["border-width"].default,
  borderRadius: theme.tag['border-radius'].default,
  background:
    theme.tag.type[status === 'warning' ? 'danger-copy' : status || 'default'],
}));

export const TagLabel = styled.p(({ theme }) => ({
  color: theme.tag.label.default,
  font: theme.tag.typography.default,
  margin: 0,
}));
