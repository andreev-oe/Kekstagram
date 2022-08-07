import {
  SEND_ADDRESS,
  GET_ADDRESS,
} from  './constants.js';

import {showOffersLoadErrorMessage} from '../utilities/index.js';

const getDataFromServer = async () => {
  try {
    const response = await fetch(GET_ADDRESS);
    if (!response.ok) {
      throw new Error (`Ошибка при получении данных, статус ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (e) {
    showOffersLoadErrorMessage();
  }
};

const sendDataToServer = (data) => fetch(SEND_ADDRESS,
  {
    method: 'POST',
    body: data,
  }
);

export {
  getDataFromServer,
  sendDataToServer
};
