import React from 'react';
import RouteComponent from './routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from "@durlabh/dframework-ui";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter as Router, useLocation, useParams, useNavigate } from 'react-router-dom';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function InnerComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const contextValue = {
    pathname: location.pathname,
    navigate: navigate,
    useParams
  };

  return (
    <RouterProvider value={contextValue}>
      <RouteComponent />
    </RouterProvider>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline />
        <Router>
          <InnerComponent />
        </Router>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
