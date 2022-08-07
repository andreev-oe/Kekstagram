import {photoData} from '../create-miniatures/index.js';
import {getRandomInteger} from '../utilities/index.js';
import {
  ANY_ZERO,
  ARRAY_LENGTH_OFFSET,
  MIN_RANDOM_PHOTO_AMOUT,
} from './constants.js';

const filterDefault = async () => await photoData;

const filterMostCommentedPhoto = async () => {
  const photos = await photoData;
  const clonedPhotos = JSON.parse(JSON.stringify(photos));
  clonedPhotos.sort((a, b) => {
    if (a.comments.length > b.comments.length) {
      return -1;
    }
    if (a.comments.length === b.comments.length) {
      return 0;
    }
    if (a.comments.length < b.comments.length) {
      return 1;
    }
  });
  return clonedPhotos;
};

const filterRandomPhoto = async () => {
  const photos = await photoData;
  const filteredPhotos = [];
  for (let i = ANY_ZERO; i < getRandomInteger(MIN_RANDOM_PHOTO_AMOUT, photos.length - ARRAY_LENGTH_OFFSET); i++) {
    const randomPhoto = photos[getRandomInteger(ANY_ZERO, photos.length - ARRAY_LENGTH_OFFSET)];
    if (filteredPhotos.every((photo) => photo.id !== randomPhoto.id)) {
      filteredPhotos.push(randomPhoto);
    }
  }
  return filteredPhotos;
};

export {
  filterMostCommentedPhoto,
  filterRandomPhoto,
  filterDefault,
};
