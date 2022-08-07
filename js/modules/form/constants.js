const MAX_HASH_TAGS_AMOUNT = 5;
const DEFAULT_PHOTO_ZOOM = '100%';
const PRISTINE_CONFIG = {
  classTo: 'js-validation',
  errorTextParent: 'js-validation',
  errorTextClass: 'js-validation-error-text'
};
const ErrorMessages = {
  hashTagsAmountError: 'Не более 5 хэш-тегов',
  uniqueHashTagsError: 'Хэш-теги должны быть уникальными',
  hashTagSymbolsError: 'Хэш-теги должны начитаться с символа #, быть не длиннее 20 символов и не содержать спецсимволов',
};
const IMAGE_FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

export {
  MAX_HASH_TAGS_AMOUNT,
  DEFAULT_PHOTO_ZOOM,
  PRISTINE_CONFIG,
  ErrorMessages,
  IMAGE_FILE_TYPES,
};
