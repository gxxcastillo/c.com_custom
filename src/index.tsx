import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import * as Sentry from '@sentry/react';

import App from './App';
import Borked from './components/Borked/Borked';

// import '@styles/global.scss';

Sentry.init({
  environment: '',
  dsn: ''
});

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={<Borked />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
