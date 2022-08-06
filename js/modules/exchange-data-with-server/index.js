import {showOffersLoadErrorMessage} from '../utilities/index.js';

const getDataFromServer = async () => {
  try {
    const response = await fetch('https://26.javascript.pages.academy/kekstagram/data');
    return await response.json();
  } catch (e) {
    showOffersLoadErrorMessage();
  }
};

export {getDataFromServer};
