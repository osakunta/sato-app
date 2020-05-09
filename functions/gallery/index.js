const express = require('express');

const { authMiddleware, corsMiddleware } = require('../middleware');
const setupAuthClient = require('./auth');

const galleryClient = setupAuthClient();
const app = express();

app.use(authMiddleware);
app.use(corsMiddleware);

app.get('/authorized', (req, res) => {
  console.log(req);
  res.send('Secured Resource');
});

app.get('/albums', async (req, res) => {
  const url = 'https://photoslibrary.googleapis.com/v1/albums';
  const photosRes = await galleryClient.request({ url });

  res.send(photosRes.data);
});

module.exports = app;
