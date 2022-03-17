import React from 'react';
import ReactDOM from 'react-dom';

import { MantineProvider } from '@mantine/core';

import App from './App';

import './index.css';
import 'animate.css';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={{ fontFamily: 'Open Sans' }}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
