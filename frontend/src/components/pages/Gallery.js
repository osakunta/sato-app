import React, { useState, useEffect } from 'react';

import galleryService from 'services/gallery';

const Gallery = () => {
  const [albums, setAlbums] = useState([]);

  const listAlbums = albums.map((album) => (<li key={album.id}>{album.title}</li>));

  useEffect(() => {
    (async () => {
      try {
        const fetchedAlbums = await galleryService.list();

        setAlbums(fetchedAlbums);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>

      <h2>Albums</h2>

      {listAlbums}
    </div>
  );
};

export default Gallery;
