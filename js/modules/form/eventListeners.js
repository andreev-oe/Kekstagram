import {
  formUploadInputElement,
  formUploadOverlayElement,
  bodyElement,
  uploadCancelElement,
  textDescriptionElement,
  hashTagInputElement,
} from './domElements.js';
import {clearUploadForm} from './clearUploadForm.js';

const onUploadFormChange = () => {
  bodyElement.classList.add('modal-open');
  formUploadOverlayElement.classList.remove('hidden');
};

const onUploadFormCancelClick = () => {
  bodyElement.classList.remove('modal-open');
  formUploadOverlayElement.classList.add('hidden');
  clearUploadForm();
};

const onBodyEscapeKeydown = (evt) => {
  if (textDescriptionElement === document.activeElement || hashTagInputElement === document.activeElement) {
    evt.stopPropagation();
  } else if (evt.key === 'Escape') {
    bodyElement.classList.remove('modal-open');
    formUploadOverlayElement.classList.add('hidden');
    clearUploadForm();
  }
};

bodyElement.addEventListener('keydown', onBodyEscapeKeydown);
formUploadInputElement.addEventListener('change', onUploadFormChange);
uploadCancelElement.addEventListener('click', onUploadFormCancelClick);
