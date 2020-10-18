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
  const [imageCount, setImageCount] = useState(null);
  const [albumName, setAlbumName] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);

  const listImages = images.map((image) => imageEntry(image));

  async function getMoreImages(id, token) {
    if (!nextPageToken) {
      return;
    }

    try {
      const fetchedImages = await galleryService.getAlbum(id, token);

      console.log(fetchedImages);

      setImages([...images, ...fetchedImages.mediaItems]);
      setNextPageToken(fetchedImages.nextPageToken);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const fetchedImages = await galleryService.getAlbum(albumId, null);

        console.log(fetchedImages);

        setImages(fetchedImages.mediaItems);
        setImageCount(fetchedImages.mediaItemsCount);
        setAlbumName(fetchedImages.title);
        setNextPageToken(fetchedImages.nextPageToken);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>{albumName} ({imageCount})</h1>

      {listImages}

      <button type="button" onClick={() => getMoreImages(albumId, nextPageToken)}>Lataa lisää</button>
    </div>
  );
};

export default Album;
