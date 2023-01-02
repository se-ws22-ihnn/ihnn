import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#513C29',
            light: '#736354',
            dark: '#382a1d',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f53300',
            light: '#f85b33',
            dark: '#ac2300',
            contrastText: '#ffffff',
        },
        background: {
            default: '#bfb59e',
            paper: '#bfb59e',
        },
        text: {
            primary: 'rgba(0,0,0,0.86)',
            secondary: 'rgba(0,0,0,0.53)',
            disabled: 'rgba(0,0,0,0.37)',
            /* hint: 'rgba(0,0,0,0.37)', */
        },
        error: {
            main: '#ac0014',
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
            main: '#013e4f',
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
    /* overrides: {
        MuiButton: {
            root: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                border: 0,
                borderRadius: 3,
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                color: 'white',
                height: 48,
                padding: '0 30px',
            },
        },
    }, */
    /* props: {
        MuiButtonBase: {
            disableRipple: true,
        },
        MuiList: {
            dense: true,
        },
        MuiMenuItem: {
            dense: true,
        },
        MuiTable: {
            size: 'small',
        },
    }, */
});

export default lightTheme;