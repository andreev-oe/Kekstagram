import {
  bodyElement,
  bigPictureElement,
} from './domElements.js';
import {miniatures} from '../create-miniatures/index.js';
import {ARRAY_LENGTH_OFFSET} from './constants.js';
import {createComments} from './showBigPicture.js';

const onBigPictureCloseButtonClick = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

const onBodyEscapeKeydown = (evtKey) => {
  if (evtKey.key === 'Escape') {
    bigPictureElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
};

const onShowMoreCommentsButtonClick = (evt) => {
  const image = evt.target.parentNode.parentNode.querySelector('img');
  return createComments(miniatures[image.dataset.photoId - ARRAY_LENGTH_OFFSET]);
};

export {
  onBigPictureCloseButtonClick,
  onBodyEscapeKeydown,
  onShowMoreCommentsButtonClick,
};
