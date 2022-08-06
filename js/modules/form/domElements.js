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
const errorMessageTemplateElement = document.querySelector('#error').content.cloneNode(true);
const errorMessageElement = errorMessageTemplateElement.querySelector('.error');

successMessageElement.classList.add('hidden');
errorMessageElement.classList.add('hidden');
bodyElement.append(successMessageElement);
bodyElement.append(errorMessageElement);

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
};
