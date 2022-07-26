import {miniatures} from '../create-miniatures/index.js';

const bodyElement = document.body;
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img').children;
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');

const socialCommentElement = bigPictureElement.querySelector('.social__comments');
const socialPictureElement = socialCommentElement.querySelector('.social__picture');
const socialTextElement = socialCommentElement.querySelector('.social__text');

const picturesContainerElement = document.querySelector('.pictures.container');
const socialCommentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const pictureCancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
