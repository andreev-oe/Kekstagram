const formUploadElement = document.querySelector('#upload-file');
const formUploadOverlayElement = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancelElement = document.querySelector('#upload-cancel');

const onUploadFormChange = () => {
  body.classList.add('modal-open');
  formUploadOverlayElement.classList.remove('hidden');
};

const onUploadFormCancelClick = () => {
  formUploadOverlayElement.classList.add('hidden');
  body.classList.remove('modal-open');
};

formUploadElement.addEventListener('change', onUploadFormChange);
uploadCancelElement.addEventListener('click', onUploadFormCancelClick);
