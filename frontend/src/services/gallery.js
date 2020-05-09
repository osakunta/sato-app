import axios from 'axios';

const GALLERY_URL = `${process.env.REACT_APP_API_URL}/gallery`;

async function get(endpoint, token) {
  try {
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

const list = async (token) => {
  const response = await get('albums', token);

  console.log(response);

  return response;
};

export default {
  list,
};
