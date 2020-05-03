const functions = require('firebase-functions');
const setupAuthClient = require('./gallery/auth');

const galleryClient = setupAuthClient()

exports.albums = functions.https.onRequest(async (request, response) => {
  const url = 'https://photoslibrary.googleapis.com/v1/albums';
  const res = await galleryClient.request({ url });
  response.send(res.data);
});
