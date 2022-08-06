import {
  bodyElement,
  bigPictureElement,
} from './domElements.js';
import {photoData} from '../create-miniatures/index.js';
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

const onShowMoreCommentsButtonClick = async (evt) => {
  const image = evt.target.parentNode.parentNode.querySelector('img');
  try {
    const miniatures = await photoData;
    return createComments(miniatures[image.dataset.photoId]);
  } catch (e) {
    throw new Error(e);
  }
};

export {
  onBigPictureCloseButtonClick,
  onBodyEscapeKeydown,
  onShowMoreCommentsButtonClick,
};
