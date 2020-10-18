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

app.get('/albums/:id', async (req, res) => {
  const albumId = req.params.id;

  const albumRes = await galleryClient.request({
    url: apiUrl(`albums/${albumId}`),
  });

  const photosRes = await galleryClient.request({
    url: apiUrl('mediaItems:search'),
    method: 'post',
    data: { albumId },
  });

  res.send({ ...albumRes.data, ...photosRes.data });
});

module.exports = app;
