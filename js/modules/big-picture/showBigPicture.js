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
  socialCommentIncrementElement,
  commentsLoaderElement,
  pictureCancelButtonElement,
} from './domElements.js';
import {
  onBigPictureCloseButtonClick,
  onBodyEscapeKeydown,
} from './eventListeners.js';

let incrementValue = 0;

const createComments = (photo) => {
  const commentsAmout = photo.comments.length;
  for (let i = incrementValue; i < 5 + incrementValue; i++) {
    if (i === commentsAmout) {
      break;
    }
    const comment = document.createElement('li');
    const image = document.createElement('img');
    const paragraph = document.createElement('p');
    comment.classList.add('social__comment');
    image.classList.add('social__picture');
    image.src = photo.comments[i].avatar;
    image.alt = photo.comments[i].name;
    image.style.width = IMAGE_WIDTH;
    image.style.height = IMAGE_HEIGHT;
    paragraph.classList.add('social__text');
    paragraph.textContent = photo.comments[i].message;
    comment.append(image);
    comment.append(paragraph);
    socialCommentsElement.append(comment);
  }
  incrementValue+=5;
  const addedComments = incrementValue;
  if (addedComments === commentsAmout) {
    commentsLoaderElement.classList.add('hidden');
  }
  socialCommentIncrementElement.textContent = `${addedComments}`;

};

const addNextComments = (evt) => createComments(miniatures[evt.target.dataset.photoId - ARRAY_LENGTH_OFFSET]);

const showBigPicture = (evt) => {
  if  (evt.target.nodeName === 'IMG') {
    incrementValue = 0;
    const photo = miniatures[evt.target.dataset.photoId - ARRAY_LENGTH_OFFSET];
    const addNextCommentsInstance = () => addNextComments(evt);
    commentsLoaderElement.removeEventListener('click', addNextCommentsInstance);
    socialCommentIncrementElement.textContent = '';
    socialCommentsElement.textContent = '';
    bigPictureImgElement.src = photo.url;
    likesCountElement.textContent = `${photo.likes}`;
    commentsCountElement.textContent = `${photo.comments.length}`;
    socialCaptionElement.textContent = photo.description;
    commentsLoaderElement.classList.remove('hidden');
    createComments(photo);
    bigPictureElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    pictureCancelButtonElement.addEventListener('click', onBigPictureCloseButtonClick);
    bodyElement.addEventListener('keydown',onBodyEscapeKeydown);
    commentsLoaderElement.addEventListener('click', addNextCommentsInstance);
  }
};

export {showBigPicture};
