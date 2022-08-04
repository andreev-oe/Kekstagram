const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range:{
    'min': [0],
    'max': [100],
  },
  start: [10],
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
      return value.toFixed(0);
    }
  }
});

sliderElement.noUiSlider.on('change', () => {
  sliderValueElement.value = `${sliderElement.noUiSlider.get()}`;
});
