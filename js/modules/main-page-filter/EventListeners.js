import {
  defaultFilterButtonElement,
  mostCommentedFilterButtonElement,
  randomFilterButtonElement
} from './domElements.js';
import {createMiniatures} from '../create-miniatures/createMiniatures.js';
import {filterDefault, filterMostCommentedPhoto, filterRandomPhoto} from './filters.js';
import {debounce} from '../utilities/index.js';

const clearPhotoPreview = () => {
  const photoElements = document.querySelectorAll('.picture');
  for (const photo of photoElements) {
    photo.remove();
  }
  const activeFilterElement = document.querySelector('.img-filters__button--active');
  activeFilterElement.classList.remove('img-filters__button--active');
};

defaultFilterButtonElement.addEventListener('click', debounce(() => {
  clearPhotoPreview();
  createMiniatures(filterDefault());
  defaultFilterButtonElement.classList.add('img-filters__button--active');
}));

mostCommentedFilterButtonElement.addEventListener('click', debounce(() => {
  clearPhotoPreview();
  createMiniatures(filterMostCommentedPhoto());
  mostCommentedFilterButtonElement.classList.add('img-filters__button--active');
}));

randomFilterButtonElement.addEventListener('click', debounce(() => {
  clearPhotoPreview();
  createMiniatures(filterRandomPhoto());
  randomFilterButtonElement.classList.add('img-filters__button--active');
}));
