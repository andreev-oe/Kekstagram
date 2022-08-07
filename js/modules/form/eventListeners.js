import {
  formUploadInputElement,
  formUploadOverlayElement,
  bodyElement,
  uploadCancelElement,
  textDescriptionElement,
  hashTagInputElement,
  successMessageElement,
  errorMessageElement,
  successButtonElement,
  errorButtonElement,
  errorDivMessageElement,
  successDivMessageElement,
  uploadImagePreviewElement,
} from './domElements.js';
import {clearUploadForm} from './clearUploadForm.js';
import {IMAGE_FILE_TYPES} from './constants.js';

const onUploadFormChange = () => {
  bodyElement.classList.add('modal-open');
  formUploadOverlayElement.classList.remove('hidden');
};

const onUploadFormCancelClick = () => {
  if(errorMessageElement.classList.contains('hidden')) {
    bodyElement.classList.remove('modal-open');
    formUploadOverlayElement.classList.add('hidden');
    clearUploadForm();
  } else {
    bodyElement.classList.remove('modal-open');
    formUploadOverlayElement.classList.add('hidden');
  }
};

const onBodyEscapeKeydown = (evt) => {
  if (textDescriptionElement === document.activeElement || hashTagInputElement === document.activeElement) {
    evt.stopPropagation();
  } else if (evt.key === 'Escape' && errorMessageElement.classList.contains('hidden')) {
    bodyElement.classList.remove('modal-open');
    formUploadOverlayElement.classList.add('hidden');
    errorMessageElement.classList.add('hidden');
    successMessageElement.classList.add('hidden');
    clearUploadForm();
  } else if (evt.key === 'Escape') {
    bodyElement.classList.remove('modal-open');
    formUploadOverlayElement.classList.add('hidden');
    errorMessageElement.classList.add('hidden');
    successMessageElement.classList.add('hidden');
  }
};

const onSuccessButtonClick = (evt) => {
  if (evt.target === successDivMessageElement) {
    evt.stopPropagation();
  } else {
    successMessageElement.classList.add('hidden');
  }
};

const onErrorButtonClick = (evt) => {
  if (evt.target === errorDivMessageElement) {
    evt.stopPropagation();
  } else {
    errorMessageElement.classList.add('hidden');
  }
};

formUploadInputElement.addEventListener('change', () => {
  const uploadPhoto = formUploadInputElement.files[0];
  const uploadPhotoName = uploadPhoto.name.toLowerCase();
  const matchesFileType = IMAGE_FILE_TYPES.some((type) => uploadPhotoName.endsWith(type));
  if (matchesFileType) {
    uploadImagePreviewElement.src = URL.createObjectURL(uploadPhoto);
  }
});
bodyElement.addEventListener('keydown', onBodyEscapeKeydown);
formUploadInputElement.addEventListener('change', onUploadFormChange);
uploadCancelElement.addEventListener('click', onUploadFormCancelClick);
successButtonElement.addEventListener('click', onSuccessButtonClick);
errorButtonElement.addEventListener('click', onErrorButtonClick);
successMessageElement.addEventListener('click', onSuccessButtonClick);
errorMessageElement.addEventListener('click', onErrorButtonClick);
