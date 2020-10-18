import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FsLightbox from 'fslightbox-react';

import Button from 'components/basic/Button';
import galleryService from 'services/gallery';

const Album = () => {
  const { albumId } = useParams();
  const [images, setImages] = useState([]);
  const [imageCount, setImageCount] = useState(null);
  const [albumName, setAlbumName] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  async function getMoreImages() {
    if (!nextPageToken) {
      return;
    }

    try {
      const fetchedImages = await galleryService.getAlbum(albumId, nextPageToken);

      console.log(fetchedImages);

      setImages([...images, ...fetchedImages.mediaItems]);
      setNextPageToken(fetchedImages.nextPageToken);
    } catch (error) {
      console.error(error);
    }
  }

  const getMoreButton = nextPageToken
    ? (
      <Button variant="contained" color="primary" onClick={getMoreImages}>
        Näytä lisää
      </Button>
    )
    : null;

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  function imageEntry(image, index) {
    return (
      <button
        type="button"
        onClick={() => openLightboxOnSlide(index + 1)}
        style={{ background: 'none', border: 'none' }}
      >
        <img
          key={image.id}
          alt={image.filename}
          src={`${image.baseUrl}=h256`}
          style={{ margin: '5px' }}
        />
      </button>
    );
  }

  const listImages = images.map((image, index) => imageEntry(image, index));
  const imageUrls = images.map((image) => image.baseUrl);

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
  }, [albumId]);

  return (
    <div>
      <h1>{albumName} ({imageCount})</h1>

      <div style={{ textAlign: 'center' }}>
        <div>
          {listImages}
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={imageUrls}
            slide={lightboxController.slide}
            key={images.length}
            type="image"
          />
        </div>
        {getMoreButton}
      </div>
    </div>
  );
};

export default Album;
