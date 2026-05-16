import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#0f172a',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,

    h4: {
      fontWeight: 700,
      color: '#0f172a',
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 600,
    },

    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06)',
          border: '1px solid #e2e8f0',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid #e2e8f0',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingLeft: 18,
          paddingRight: 18,
          fontWeight: 600,
        },
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: '1px solid #e2e8f0',
        },
      },
    },
  },
});

export default theme;