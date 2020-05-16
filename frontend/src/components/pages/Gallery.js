import React, { useState } from 'react';
import { useAuth0 } from '../../utils/auth0';
import galleryService from '../../services/gallery';

const Gallery = () => {
  const { getTokenSilently } = useAuth0();
  const [albums, setAlbums] = useState([]);

  const callApi = async () => {
    const token = await getTokenSilently();

    try {
      const fetchedAlbums = await galleryService.list(token);

      setAlbums(fetchedAlbums);
    } catch (error) {
      console.error(error);
    }
  };

  const listAlbums = albums.map((album) => (<li key={album.id}>{album.title}</li>));

  return (
    <div>
      <h1>Gallery</h1>

      <button type="button" onClick={callApi}>Get albums</button>

      <h2>Albums</h2>

      {listAlbums}
    </div>
  );
};

export default Gallery;
