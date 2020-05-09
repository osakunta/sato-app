const functions = require('firebase-functions');
const { OAuth2Client } = require('google-auth-library');

const initial_tokens = {
  refresh_token: functions.config().gallery.refresh_token,
};

module.exports = function setupAuthClient() {
  const oAuth2Client = new OAuth2Client(
    functions.config().gallery.client_id,
    functions.config().gallery.client_secret,
    'http://localhost:8888/oauth2callback',
  );

  oAuth2Client.on('tokens', (tokens) => {
    if (tokens.refresh_token) {
      console.error(`Set the new refresh token:\nfirebase functions:config:set gallery.refresh_token="${tokens.refresh_token}"`);
    }
  });

  oAuth2Client.setCredentials(initial_tokens);

  return oAuth2Client;
};
