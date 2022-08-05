const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');
const effectsElement = document.querySelector('.img-upload__effects');
const imagePreviewElement = document.querySelector('.img-upload__preview img');

noUiSlider.create(sliderElement, {
  range:{
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
});

let selectedEffect = '';
let effectUnits = '';

sliderElement.noUiSlider.on('slide', () => {
  sliderValueElement.value = `${sliderElement.noUiSlider.get()}`;
  if (selectedEffect !== 'none') {
    imagePreviewElement.style = `filter: ${selectedEffect}(${sliderValueElement.value}${effectUnits})`;
  }
});

const setEffect = (evt) => {
  imagePreviewElement.style = 'none';
  if (evt.target.value) {
    switch (evt.target.value) {
      case 'none':
        sliderElement.classList.add('hidden');
        imagePreviewElement.style = 'none';
        effectUnits = '';
        sliderElement.noUiSlider.updateOptions({
          range: {
            'min': 0,
            'max': 1
          },
          start: [0],
          step: 0.1,
        });
        break;
      case 'chrome':
        sliderElement.classList.remove('hidden');
        selectedEffect = 'grayscale';
        effectUnits = '';
        sliderElement.noUiSlider.updateOptions({
          range: {
            'min': 0,
            'max': 1
          },
          start: [0],
          step: 0.1,
        });
        break;
      case 'sepia':
        sliderElement.classList.remove('hidden');
        selectedEffect = 'sepia';
        effectUnits = '';
        sliderElement.noUiSlider.updateOptions({
          range: {
            'min': 0,
            'max': 1
          },
          start: [0],
          step: 0.1,
        });
        break;
      case 'marvin':
        sliderElement.classList.remove('hidden');
        selectedEffect = 'invert';
        effectUnits = '%';
        sliderElement.noUiSlider.updateOptions({
          range: {
            'min': 0,
            'max': 100
          },
          start: [0],
          step: 1,
        });
        break;
      case 'phobos':
        sliderElement.classList.remove('hidden');
        selectedEffect = 'blur';
        effectUnits = 'px';
        sliderElement.noUiSlider.updateOptions({
          range: {
            'min': 0,
            'max': 3
          },
          start: [0],
          step: 0.1,
        });
        break;
      case 'heat':
        sliderElement.classList.remove('hidden');
        selectedEffect = 'brightness';
        effectUnits = '';
        sliderElement.noUiSlider.updateOptions({
          range: {
            'min': 1,
            'max': 3
          },
          start: [1],
          step: 0.1,
        });
        break;
    }
  }
};

effectsElement.addEventListener('click', setEffect);
