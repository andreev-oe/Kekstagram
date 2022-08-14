import {
  PRISTINE_CONFIG,
  ErrorMessages,
  MAX_HASH_TAGS_AMOUNT,
} from './constants.js';
import {
  hashTagInputElement,
  uploadFormElement,
} from './dom-elements.js';

const hashTagRegExp = /^#[ёЁа-яА-Яa-zA-Z0-9]{1,19}$/;

const getRawHashTags = (rawHashTags) => rawHashTags.split(' ');

const hasDuplicates = (hashTags) => {
  for (let i =0; i < hashTags.length; i++) {
    let countDuplicates = 0;
    for (let j =0; j < hashTags.length; j++) {
      if (hashTags[i] === hashTags[j]) {
        countDuplicates++;
      }
    }
    if (countDuplicates > 1) {
      return false;
    }
  }
  return true;
};

const validateHashTagsAmount = (rawHashTags) => {
  const hashTags = getRawHashTags(rawHashTags);
  return hashTags.length <= MAX_HASH_TAGS_AMOUNT;
};

const validateHashTagsUnique = (rawHashTags) => {
  const hashTags = getRawHashTags(rawHashTags);
  const isUnique = () => hasDuplicates(hashTags);
  return isUnique();
};

const validateHashTagsSymbols = (rawHashTags) => {
  const hashTags = getRawHashTags(rawHashTags);
  let pass = true;
  hashTags.forEach((hashTag) => {
    if(!hashTagRegExp.test(hashTag)) {
      pass = false;
    }
  });
  return pass;
};

const pristine = new Pristine(uploadFormElement, PRISTINE_CONFIG, true);

pristine.addValidator(hashTagInputElement, validateHashTagsAmount, ErrorMessages.hashTagsAmountError);
pristine.addValidator(hashTagInputElement, validateHashTagsUnique, ErrorMessages.uniqueHashTagsError);
pristine.addValidator(hashTagInputElement, validateHashTagsSymbols, ErrorMessages.hashTagSymbolsError);

export {
  pristine,
};
