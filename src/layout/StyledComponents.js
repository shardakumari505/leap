import { styled } from '@mui/system';

export const LayoutRoot = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
}));

export const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '80%',
});
