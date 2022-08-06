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
import {
  imagePreviewElement,
  sliderElement,
} from '../photo-effects/domElements.js';

const clearUploadForm = () => {
  imagePreviewElement.style = '';
  sliderElement.classList.add('hidden');
  for (const field of formInputElements) {
    if (field.type === 'radio') {
      field.checked = field.value === 'none';
    } else {
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
