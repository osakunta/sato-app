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
  try {
    const { pageToken } = req.query;

    const url = pageToken
      ? apiUrl(`albums?pageToken=${pageToken}`)
      : apiUrl('albums');

    const photosRes = await galleryClient.request({ url });

    res.send(photosRes.data);
  } catch (error) {
    console.error(error);
  }
});

app.get('/albums/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const { pageToken } = req.query;

    const albumRes = pageToken
      ? { data: null }
      : await galleryClient.request({
        url: apiUrl(`albums/${albumId}`),
      });

    const photosRes = await galleryClient.request({
      url: apiUrl('mediaItems:search'),
      method: 'post',
      data: pageToken
        ? { albumId, pageToken, pageSize: 100 }
        : { albumId, pageSize: 100 },
    });

    res.send({ ...albumRes.data, ...photosRes.data });
  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
