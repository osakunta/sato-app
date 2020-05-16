import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './index.css';
import App from './App';
import { Auth0Provider } from './utils/auth0';
import history from './utils/history';
import config from './auth_config.json';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    audience={config.audience}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <CssBaseline />
    <App />
  </Auth0Provider>,
  document.getElementById('root'),
);
