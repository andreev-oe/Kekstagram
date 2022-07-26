import {
  bodyElement,
  formUploadOverlayElement,
  uploadButtonElement,
  uploadFormElement,
  successMessageElement,
  errorMessageElement,
  formUploadInputElement,
} from './dom-elements.js';
import {sendDataToServer} from '../exchange-data-with-server/index.js';
import {pristine} from './validation.js';
import {clearUploadForm} from './clear-upload-form.js';

const handleSendData = async () => {
  const formData = new FormData(uploadFormElement);
  uploadButtonElement.disabled = true;
  try {
    const response = await sendDataToServer(formData);
    if (!response.ok) {
      throw new Error (`Ошибка при отправке данных, статус ${response.status} - ${response.statusText}`);
    }
    bodyElement.classList.remove('modal-open');
    formUploadOverlayElement.classList.add('hidden');
    successMessageElement.classList.remove('hidden');
    uploadButtonElement.disabled = false;
    clearUploadForm();
  } catch (e) {
    bodyElement.classList.remove('modal-open');
    formUploadOverlayElement.classList.add('hidden');
    errorMessageElement.classList.remove('hidden');
    uploadButtonElement.disabled = false;
    formUploadInputElement.value = '';
    if (errorMessageElement.classList.contains('hidden')) {
      clearUploadForm();
    }
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
