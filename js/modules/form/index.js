import './constants.js';
import {
  bodyElement,
  errorMessageElement,
  successMessageElement,
  uploadFormElement} from './domElements.js';
import './eventListeners.js';
import {pristine} from './validation.js';
import './sendData.js';

successMessageElement.classList.add('hidden');
errorMessageElement.classList.add('hidden');
bodyElement.prepend(successMessageElement);
bodyElement.prepend(errorMessageElement);

uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
