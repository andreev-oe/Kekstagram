import {DEFAULT_PHOTO_ZOOM} from './constants.js';
import {
  formUploadInputElement,
  formUploadOverlayElement,
  bodyElement,
  uploadCancelElement,
  formInputElements,
  scaleControlValueElement,
  textDescriptionElement,
  hashTagInputElement,
} from './domElements.js';

const clearUploadForm = () => {
  for (const field of formInputElements) {
    field.checked = field.value === 'none';
    if (field.type !== 'radio') {
      field.value = '';
    }
  }
  scaleControlValueElement.value = DEFAULT_PHOTO_ZOOM;
};

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
