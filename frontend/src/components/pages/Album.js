import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import galleryService from 'services/gallery';

function imageEntry(image) {
  return (
    <img key={image.id} alt={image.filename} src={image.baseUrl} style={{ margin: '5px' }} />
  );
}

const Album = () => {
  const { albumId } = useParams();
  const [images, setImages] = useState([]);
  const [imageCount, setImageCount] = useState([]);
  const [albumName, setAlbumName] = useState([]);

  const listImages = images.map((image) => imageEntry(image));

  useEffect(() => {
    (async () => {
      try {
        const fetchedImages = await galleryService.getAlbum(albumId);

        console.log(fetchedImages);

        setImages(fetchedImages.mediaItems);
        setImageCount(fetchedImages.mediaItemsCount);
        setAlbumName(fetchedImages.title);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>{albumName} ({imageCount})</h1>

      {listImages}
    </div>
  );
};

export default Album;
