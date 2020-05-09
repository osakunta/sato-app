const functions = require('firebase-functions');

const gallery = require('./gallery');

exports.gallery = functions.region('europe-west3').https.onRequest(gallery);
