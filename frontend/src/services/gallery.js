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

const list = async () => {
  const response = await get('albums');

  return response.data.albums;
};

export default {
  list,
};
