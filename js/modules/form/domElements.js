const formUploadInputElement = document.querySelector('#upload-file');
const formUploadOverlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const uploadCancelElement = document.querySelector('#upload-cancel');
const imageUploadWrapperElement = document.querySelector('.img-upload__wrapper');
const formInputElements = imageUploadWrapperElement.querySelectorAll('input, textarea');
const scaleControlValueElement = imageUploadWrapperElement.querySelector('.scale__control--value');
const textDescriptionElement = imageUploadWrapperElement.querySelector('.text__description');
const hashTagInputElement =imageUploadWrapperElement.querySelector('.text__hashtags');
const uploadFormElement =imageUploadWrapperElement.querySelector('#upload-select-image');

export {
  formUploadInputElement,
  formUploadOverlayElement,
  bodyElement,
  uploadCancelElement,
  formInputElements,
  scaleControlValueElement,
  textDescriptionElement,
  hashTagInputElement,
  uploadFormElement,
};
