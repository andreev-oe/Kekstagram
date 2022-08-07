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
const uploadButtonElement =imageUploadWrapperElement.querySelector('#upload-submit');
const successMessageTemplateElement = document.querySelector('#success').content.cloneNode(true);
const successMessageElement = successMessageTemplateElement.querySelector('.success');
const successDivMessageElement = successMessageTemplateElement.querySelector('.success__inner');
const successButtonElement = successMessageTemplateElement.querySelector('.success__button');
const errorMessageTemplateElement = document.querySelector('#error').content.cloneNode(true);
const errorMessageElement = errorMessageTemplateElement.querySelector('.error');
const errorDivMessageElement = errorMessageTemplateElement.querySelector('.error__inner');
const errorButtonElement = errorMessageTemplateElement.querySelector('.error__button');

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
  uploadButtonElement,
  successMessageElement,
  errorMessageElement,
  successButtonElement,
  errorButtonElement,
  errorDivMessageElement,
  successDivMessageElement,
};
