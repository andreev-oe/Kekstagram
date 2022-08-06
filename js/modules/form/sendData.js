import {
  bodyElement,
  formUploadOverlayElement,
  uploadButtonElement,
  uploadFormElement,
  successMessageElement,
  errorMessageElement,
} from './domElements.js';
import {sendDataToServer} from '../exchange-data-with-server/index.js';
import {pristine} from './validation.js';
import {clearUploadForm} from './clearUploadForm.js';

const handleSendData = async () => {
  const formData = new FormData(uploadFormElement);
  uploadButtonElement.disabled = true;
  try {
    await sendDataToServer(formData);
    bodyElement.classList.remove('modal-open');
    formUploadOverlayElement.classList.add('hidden');
    successMessageElement.classList.remove('hidden');
    clearUploadForm();
    uploadButtonElement.disabled = false;
  } catch (e) {
    bodyElement.classList.remove('modal-open');
    formUploadOverlayElement.classList.add('hidden');
    errorMessageElement.classList.remove('hidden');
    clearUploadForm();
    uploadButtonElement.disabled = false;
  }
};

const sendPhotoToServer = (evt) => {
  evt.preventDefault();
  const isValidForm = pristine.validate();
  if (isValidForm) {
    handleSendData();
  }
};

uploadButtonElement.addEventListener('click', sendPhotoToServer);
