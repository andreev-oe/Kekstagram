const picturesContainerElement = document.querySelector('.pictures.container');
const bodyElement = document.body;
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const socialCommentIncrementElement = bigPictureElement.querySelector('.comments-increment');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const pictureCancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

export {
  picturesContainerElement,
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
};
