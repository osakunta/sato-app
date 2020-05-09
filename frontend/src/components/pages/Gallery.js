import React from 'react';
import { useAuth0 } from '../../utils/auth0';
import galleryService from '../../services/gallery';

const Gallery = () => {
  const { getTokenSilently } = useAuth0();

  const callApi = async () => {
    const token = await getTokenSilently();

    try {
      const response = await galleryService.list(token);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Gallery</h1>

      <button type="button" onClick={callApi}>Get albums</button>
    </div>
  );
};

export default Gallery;
