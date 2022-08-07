import {
  imagePreviewElement,
  sliderElement,
} from '../photo-effects/domElements.js';
import {
  formInputElements,
  formUploadInputElement,
  scaleControlValueElement,
} from './domElements.js';
import {DEFAULT_PHOTO_ZOOM} from './constants.js';

const clearUploadForm = () => {
  formUploadInputElement.value = '';
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

export {clearUploadForm};
