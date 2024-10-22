import { createTheme, DEFAULT_THEME } from '@mantine/core';
import './assets/fonts/Inter/Inter.css';

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'Inter, Monaco, Courier, monospace',
  headings: {
    fontFamily: `Inter, ${DEFAULT_THEME.headings.fontFamily}`,
  },
});
