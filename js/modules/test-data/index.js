import {getRandomInteger} from '../utilities/index.js';
import {
  AMOUNT_OF_CARDS,
  ANY_START_ZERO,
  FIRST_ID,
  MIN_LIKES,
  MAX_LIKES,
  MIN_AVATAR_ID,
  MAX_AVATAR_ID,
  MESSAGES,
  NAMES,
} from './constants.js';

const createMessages = () => {
  const messages = [];
  for(let i = FIRST_ID; i <= getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID); i++) {
    const message = {
      id: i+MIN_AVATAR_ID,
      avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_ID,MAX_AVATAR_ID)}.svg`,
      message: MESSAGES[getRandomInteger(ANY_START_ZERO, MESSAGES.length-1)],
      name: NAMES[getRandomInteger(ANY_START_ZERO, NAMES.length-1)]
    };
    messages.push(message);
  }
  return messages;
};

const createMiniaturesData = () => {
  const cards = [];
  for (let i = FIRST_ID; i <= AMOUNT_OF_CARDS; i++) {
    const card = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `description #${i}`,
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: createMessages()
    };
    cards.push(card);
  }
  return cards;
};

export {createMiniaturesData};
