import axios from 'axios';

import { getToken } from 'utils/auth0';

const GALLERY_URL = `${process.env.REACT_APP_API_URL}/gallery`;

async function get(endpoint) {
  try {
    const token = await getToken();

    const response = await axios.get(`${GALLERY_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

const list = async (pageToken) => {
  const endpoint = pageToken
    ? `albums?pageToken=${pageToken}`
    : 'albums';

  const response = await get(endpoint);

  return response.data.albums;
};

const getAlbum = async (albumId, pageToken) => {
  const endpoint = pageToken
    ? `albums/${albumId}?pageToken=${pageToken}`
    : `albums/${albumId}`;

  const response = await get(endpoint);

  return response.data;
};

export default {
  list,
  getAlbum,
};
