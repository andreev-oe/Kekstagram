import './constants.js';
import {uploadFormElement} from './domElements.js';
import './eventListeners.js';
import {pristine} from './validation.js';
import './sendData.js';

uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
