const AMOUNT_OF_CARDS = 25;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Ксения',
  'Олег',
  'Лариса',
  'Евгений',
  'Юрий',
  'Татьяна',
  'Валентина',
  'Марина',
  'Владислав',
  'Алекснадр',
  'Елена',
  'Вероника',
];

const getRandomInteger = (scaleLow, scaleHigh) => {
  if (scaleLow === scaleHigh) {
    return scaleLow;
  } else if (scaleLow < 0 || scaleLow > scaleHigh) {
    throw new RangeError ('Диапазон меньше 0 или отрицательное начальное значание');
  }
  return Math.round(Math.random()*(scaleHigh - scaleLow)+scaleLow);
};

const checkStringLength = (string, length) => string.length <= length;

const createCards = () => {
  const cards = [];
  for (let i = 0; i < AMOUNT_OF_CARDS; i++) {
    const card = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `description #${i}`,
      likes: getRandomInteger(15, 200),
      comments: {
        id: i+AMOUNT_OF_CARDS,
        avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
        message: MESSAGES[getRandomInteger(0, MESSAGES.length-1)],
        name: NAMES[getRandomInteger(0, NAMES.length-1)]
      }
    };
    cards.push(card);
  }
};

checkStringLength();
createCards();
