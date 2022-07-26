import {miniatures} from '../create-miniatures/index.js';
import {
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
  ARRAY_LENGTH_OFFSET,
} from './constants.js';
import {
  bodyElement,
  bigPictureElement,
  bigPictureImgElement,
  likesCountElement,
  commentsCountElement,
  socialCaptionElement,
  socialCommentsElement,
  socialCommentCountElement,
  commentsLoaderElement,
  pictureCancelButtonElement,
} from './domElements.js';
import {
  onBigPictureCloseButtonClick,
  onBodyEscapeKeydown,
} from './eventListeners.js';

const createComments = (photo) => {
  socialCommentsElement.textContent = '';
  photo.comments.forEach((element) => {
    const comment = document.createElement('li');
    const image = document.createElement('img');
    const paragraph = document.createElement('p');
    comment.classList.add('social__comment');
    image.classList.add('social__picture');
    image.src = element.avatar;
    image.alt = element.name;
    image.style.width = IMAGE_WIDTH;
    image.style.height = IMAGE_HEIGHT;
    paragraph.classList.add('social__text');
    paragraph.textContent = element.message;
    comment.append(image);
    comment.append(paragraph);
    socialCommentsElement.append(comment);
  });
};

const showBigPicture = (evt) => {
  if  (evt.target.nodeName === 'IMG') {
    bigPictureImgElement.src = miniatures[evt.target.dataset.photoId - ARRAY_LENGTH_OFFSET].url;
    likesCountElement.textContent = `${miniatures[evt.target.dataset.photoId - ARRAY_LENGTH_OFFSET].likes}`;
    commentsCountElement.textContent = `${miniatures[evt.target.dataset.photoId - ARRAY_LENGTH_OFFSET].comments.length}`;
    socialCommentCountElement.classList.add('hidden');
    commentsLoaderElement.classList.add('hidden');
    socialCaptionElement.textContent = miniatures[evt.target.dataset.photoId - ARRAY_LENGTH_OFFSET].description;
    createComments(miniatures[evt.target.dataset.photoId - ARRAY_LENGTH_OFFSET]);
    bigPictureElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    pictureCancelButtonElement.addEventListener('click', onBigPictureCloseButtonClick);
    bodyElement.addEventListener('keydown',onBodyEscapeKeydown);
  }
};

export {showBigPicture};
