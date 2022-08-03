import {miniatures} from '../create-miniatures/index.js';
import {
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
  ARRAY_LENGTH_OFFSET,
  COMMENTS_PORTION,
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

const createSingleComment = (photo, index) => {
  const comment = document.createElement('li');
  const image = document.createElement('img');
  const paragraph = document.createElement('p');
  comment.classList.add('social__comment');
  image.classList.add('social__picture');
  image.src = photo.comments[index].avatar;
  image.alt = photo.comments[index].name;
  image.dataset.photoId = photo.comments[index].id;
  image.style.width = IMAGE_WIDTH;
  image.style.height = IMAGE_HEIGHT;
  paragraph.classList.add('social__text');
  paragraph.textContent = photo.comments[index].message;
  comment.append(image);
  comment.append(paragraph);
  socialCommentsElement.append(comment);
};

const createComments = (photo) => {
  const commentsAmount = photo.comments.length;
  for (let i = incrementValue; i < COMMENTS_PORTION + incrementValue; i++) {
    if (i === commentsAmount) {
      const commentsRemain = commentsAmount - incrementValue;
      commentsLoaderElement.classList.add('hidden');
      incrementValue+=commentsRemain;
      socialCommentIncrementElement.textContent = `${incrementValue}`;
      return;
    }
    createSingleComment(photo, i);
  }
  incrementValue+=COMMENTS_PORTION;
  if (commentsAmount === incrementValue) {
    commentsLoaderElement.classList.add('hidden');
  }
  socialCommentIncrementElement.textContent = `${incrementValue}`;
};

const showBigPicture = (evt) => {
  if  (evt.target.nodeName === 'IMG') {
    incrementValue = 0;
    const photo = miniatures[evt.target.dataset.photoId - ARRAY_LENGTH_OFFSET];
    socialCommentIncrementElement.textContent = '';
    socialCommentsElement.textContent = '';
    bigPictureImgElement.src = photo.url;
    bigPictureImgElement.dataset.photoId = evt.target.dataset.photoId;
    likesCountElement.textContent = `${photo.likes}`;
    commentsCountElement.textContent = `${photo.comments.length}`;
    socialCaptionElement.textContent = photo.description;
    commentsLoaderElement.classList.remove('hidden');
    createComments(photo);
    bigPictureElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    pictureCancelButtonElement.addEventListener('click', onBigPictureCloseButtonClick);
    bodyElement.addEventListener('keydown',onBodyEscapeKeydown);
  }
};

export {
  showBigPicture,
  createComments,
};
