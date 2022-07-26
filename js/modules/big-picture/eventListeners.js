import {
  bodyElement,
  bigPictureElement,
} from './domElements.js';

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

export {
  onBigPictureCloseButtonClick,
  onBodyEscapeKeydown,
};
