import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6750A4' },
    secondary: { main: '#958DA5' },
    background: { default: '#F6F0FB', paper: '#FFFBFE' },
  },
  typography: {
    fontFamily: '"Nunito", "Roboto", sans-serif',
    h4: { fontWeight: 800 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
    body2: { fontWeight: 500 },
  },
  shape: { borderRadius: 20 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 2px 12px 0 rgba(103,80,164,0.10)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: 'none' },
      },
    },
  },
})

export default theme
