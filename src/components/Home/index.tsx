import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidenav from '../SideNav';

const defaultTheme = createTheme();

export default function Dashboard() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Sidenav />
    </ThemeProvider>
  );
}
