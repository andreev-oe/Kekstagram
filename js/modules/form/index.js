import './constants.js';
import {
  bodyElement,
  errorMessageElement,
  successMessageElement,
  uploadFormElement} from './dom-elements.js';
import './event-listeners.js';
import {pristine} from './validation.js';
import './send-data.js';

successMessageElement.classList.add('hidden');
errorMessageElement.classList.add('hidden');
bodyElement.prepend(successMessageElement);
bodyElement.prepend(errorMessageElement);

uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
