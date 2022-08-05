import {
  sliderElement,
  imagePreviewElement,
  sliderValueElement,
} from './domElements.js';
import {
  SLIDER_CONFIGS,
  EFFECTS,
  FILTERS,
} from './constants.js';

let selectedEffect = '';
let effectUnits = '';

sliderElement.noUiSlider.on('slide', () => {
  sliderValueElement.value = `${sliderElement.noUiSlider.get()}`;
  if (selectedEffect !== 'none') {
    imagePreviewElement.style.filter = `${selectedEffect}(${sliderValueElement.value}${effectUnits})`;
  }
});

const setEffect = (evt) => {
  imagePreviewElement.style.filter = FILTERS.none;
  effectUnits = '';
  if (evt.target.value) {
    switch (evt.target.value) {
      case EFFECTS.none:
        sliderElement.classList.add('hidden');
        break;
      case EFFECTS.chrome:
        sliderElement.classList.remove('hidden');
        selectedEffect = FILTERS.chrome;
        sliderElement.noUiSlider.updateOptions(SLIDER_CONFIGS.scaleFromZeroToOne);
        break;
      case EFFECTS.sepia:
        sliderElement.classList.remove('hidden');
        selectedEffect = FILTERS.sepia;
        sliderElement.noUiSlider.updateOptions(SLIDER_CONFIGS.scaleFromZeroToOne);
        break;
      case EFFECTS.marvin:
        sliderElement.classList.remove('hidden');
        selectedEffect = FILTERS.marvin;
        effectUnits = '%';
        sliderElement.noUiSlider.updateOptions(SLIDER_CONFIGS.scaleFromZeroToOneHundred);
        break;
      case EFFECTS.phobos:
        sliderElement.classList.remove('hidden');
        selectedEffect = FILTERS.phobos;
        effectUnits = 'px';
        sliderElement.noUiSlider.updateOptions(SLIDER_CONFIGS.scaleFromZeroToThree);
        break;
      case EFFECTS.heat:
        sliderElement.classList.remove('hidden');
        selectedEffect = FILTERS.heat;
        sliderElement.noUiSlider.updateOptions(SLIDER_CONFIGS.scaleFromOneToThree);
        break;
    }
  }
};

export {setEffect};
