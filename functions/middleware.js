const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const authMiddleware = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://osakunta.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://europe-west3-satakuntatalo-services.cloudfunctions.net',
  issuer: 'https://osakunta.eu.auth0.com/',
  algorithms: ['RS256']
});

const corsMiddleware = cors({
  origin: true,
});

module.exports = {
  authMiddleware,
  corsMiddleware,
}
