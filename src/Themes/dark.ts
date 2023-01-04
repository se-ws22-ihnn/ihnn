import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        primary: {
          main: '#1e0b00',
          light: '#4b3b32',
          dark: '#150600',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#f53300',
          light: '#f85b33',
          dark: '#ac2300',
          contrastText: '#ffffff',
        },
        background: {
          default: '#513C29',
          paper: '#91735e',
        },
        text: {
          secondary: 'rgba(255,255,255,0.7)',
          disabled: 'rgba(255,255,255,0.5)',
          
        },
        error: {
          main: '#f54336',
          light: '#f6685e',
          dark: '#ac2e25',
          contrastText: '#ffffff',
        },
        info: {
          main: '#c36c1f',
          contrastText: '#ffffff',
          light: '#d0894b',
          dark: '#894b15',
        },
        success: {
          main: '#4cb050',
          light: '#6fc073',
          dark: '#357c38',
          contrastText: 'rgba(0,0,0,0.86)',
        },
        divider: 'rgba(0,0,0,0.13)',
        warning: {
          main: '#ff9900',
          light: '#ffae33',
          dark: '#b26c00',
          contrastText: 'rgba(0,0,0,0.86)',
        },
      },
      typography: {
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        htmlFontSize: 18,
      },
      spacing: 8,
      shape: {
        borderRadius: 14,
      },
});

export default darkTheme