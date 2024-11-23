import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateProvider, SnackbarProvider, locales } from '@durlabh/dframework-ui';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as dateLocale from 'date-fns/locale/de';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
      <StateProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dateLocale[locales]}>
          <App />
        </LocalizationProvider>
      </StateProvider>
    </SnackbarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();