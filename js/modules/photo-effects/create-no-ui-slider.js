import {
  sliderElement,
} from './dom-elements.js';
import {SLIDER_CONFIGS} from './constants.js';

noUiSlider.create(sliderElement, SLIDER_CONFIGS.default);
