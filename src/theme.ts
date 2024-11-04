'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f8bbd0',
    },
    secondary: {
      main: '#d81b60',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter)',
  },
});

export default theme;
