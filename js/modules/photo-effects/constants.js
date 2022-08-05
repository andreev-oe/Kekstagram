const SLIDER_CONFIGS = {
  default: {
    range: {
      'min': [0],
      'max': [100],
    },
    start: [0],
    step: 1,
    connect: 'lower',
    format: {
      from: function (value) {
        return Number(value);
      },
      to: function (value) {
        if (Number.isInteger(value)) {
          return value;
        }
        return value.toFixed(1);
      }
    }
  },
  scaleFromZeroToOne: {
    range: {
      'min': 0,
      'max': 1
    },
    start: [0],
    step: 0.1,
  },
  scaleFromZeroToThree: {
    range: {
      'min': 0,
      'max': 3
    },
    start: [0],
    step: 0.1,
  },
  scaleFromZeroToOneHundred: {
    range: {
      'min': 0,
      'max': 100
    },
    start: [0],
    step: 1,
  },
  scaleFromOneToThree: {
    range: {
      'min': 1,
      'max': 3
    },
    start: [1],
    step: 0.1,
  },
};
const FILTERS = {
  none: 'none',
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
};
const EFFECTS = {
  none: 'none',
  chrome: 'chrome',
  sepia: 'sepia',
  marvin: 'marvin',
  phobos: 'phobos',
  heat: 'heat',
};

export {
  SLIDER_CONFIGS,
  EFFECTS,
  FILTERS,
};
