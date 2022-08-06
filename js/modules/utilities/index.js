const getRandomInteger = (scaleLow, scaleHigh) => {
  if (scaleLow === scaleHigh) {
    return scaleLow;
  } else if (scaleLow < 0 || scaleLow > scaleHigh) {
    throw new RangeError ('Диапазон меньше 0 или отрицательное начальное значание');
  }
  return Math.round(Math.random()*(scaleHigh - scaleLow)+scaleLow);
};

const checkStringLength = (string, length) => string.length <= length;

const showOffersLoadErrorMessage = () => {
  const body = document.body;
  const mapLoadFailedMessage = document.createElement('div');
  mapLoadFailedMessage.textContent = 'Загрузка фотографий не удалась, попробуйте обновить страницу';
  mapLoadFailedMessage.style.position = 'absolute';
  mapLoadFailedMessage.style.zIndex = '1000';
  mapLoadFailedMessage.style.left = '0';
  mapLoadFailedMessage.style.top = '0';
  mapLoadFailedMessage.style.width = '100%';
  mapLoadFailedMessage.style.padding = '13px 0 13px 0';
  mapLoadFailedMessage.style.fontSize = '20px';
  mapLoadFailedMessage.style.color = 'white';
  mapLoadFailedMessage.style.backgroundColor = 'red';
  mapLoadFailedMessage.style.textAlign = 'center';
  body.prepend(mapLoadFailedMessage);
};

export {
  getRandomInteger,
  checkStringLength,
  showOffersLoadErrorMessage,
};
