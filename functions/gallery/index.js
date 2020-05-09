const express = require('express');

const { authMiddleware, corsMiddleware } = require('../middleware');
const setupAuthClient = require('./auth');

const galleryClient = setupAuthClient();
const app = express();

app.use(authMiddleware);
app.use(corsMiddleware);

const PHOTOS_API = 'https://photoslibrary.googleapis.com/v1';

const apiUrl = (endpoint) => `${PHOTOS_API}/${endpoint}`;

app.get('/albums', async (req, res) => {
  const url = apiUrl('albums');
  const photosRes = await galleryClient.request({ url });

  res.send(photosRes.data);
});

module.exports = app;
