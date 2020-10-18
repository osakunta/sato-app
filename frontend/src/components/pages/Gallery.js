import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import galleryService from 'services/gallery';

function albumEntry(album) {
  return (
    <li key={album.id}>
      <Link to={`/gallery/${album.id}`}>{album.title}</Link>
    </li>
  );
}

const Gallery = () => {
  const [albums, setAlbums] = useState([]);

  const listAlbums = albums.map((album) => albumEntry(album));

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
