import {
  ANY_ZERO,
  DEBOUNCE_TIME
} from './constants.js';

const getRandomInteger = (scaleLow, scaleHigh) => {
  if (scaleLow === scaleHigh) {
    return scaleLow;
  } else if (scaleLow < ANY_ZERO || scaleLow > scaleHigh) {
    throw new RangeError ('Диапазон меньше 0 или отрицательное начальное значание');
  }
  return Math.round(Math.random()*(scaleHigh - scaleLow)+scaleLow);
};

const showOffersLoadErrorMessage = () => {
  const body = document.body;
  const mapLoadFailedMessage = document.createElement('div');
  mapLoadFailedMessage.textContent = 'Загрузка фотографий не удалась, попробуйте обновить страницу';
  mapLoadFailedMessage.classList.add('load-error-message');
  body.prepend(mapLoadFailedMessage);
};

const debounce = (callback, timeoutDelay = DEBOUNCE_TIME) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...rest), timeoutDelay);
  };
};

export {
  getRandomInteger,
  showOffersLoadErrorMessage,
  debounce,
};
