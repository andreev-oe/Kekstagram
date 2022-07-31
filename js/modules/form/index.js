const formUploadElement = document.querySelector('#upload-file');
const formUploadOverlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const uploadCancelElement = document.querySelector('#upload-cancel');
const imageUploadWrapperElement = document.querySelector('.img-upload__wrapper');
const formInputElements = imageUploadWrapperElement.querySelectorAll('input, textarea');
const scaleControlValueElement = imageUploadWrapperElement.querySelector('.scale__control--value');
const textDescriptionElement = imageUploadWrapperElement.querySelector('.text__description');

const clearUploadForm = () => {
  for (const field of formInputElements) {
    field.checked = field.value === 'none';
    if (field.type !== 'radio') {
      field.value = '';
    }
  }
  scaleControlValueElement.value = '55%';
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
  if (textDescriptionElement === document.activeElement) {
    evt.stopPropagation();
  } else if (evt.key === 'Escape') {
    bodyElement.classList.remove('modal-open');
    formUploadOverlayElement.classList.add('hidden');
    clearUploadForm();
  }
};

bodyElement.addEventListener('keydown', onBodyEscapeKeydown);
formUploadElement.addEventListener('change', onUploadFormChange);
uploadCancelElement.addEventListener('click', onUploadFormCancelClick);
