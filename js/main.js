const getRandomInteger = (scaleLow, scaleHigh) => {
  if (scaleLow === scaleHigh) {
    return scaleLow;
  } else if (scaleLow < 0 || scaleLow > scaleHigh) {
    throw new RangeError ('Диапазон меньше 0 или отрицательное начальное значание');
  }
  return Math.round(Math.random()*(scaleHigh - scaleLow)+scaleLow);
};

const checkStringLength = (string, length) => {
  if (string.length > length) {
    return false;
  }
  return true;
};

getRandomInteger();
checkStringLength();
