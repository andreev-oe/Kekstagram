import {
  zoomOut,
  zoomIn,
  scaleValueElement,
  imagePreviewElement,
} from './domElements.js';
import {SCALE_STEP} from './constants.js';

let scaleValue = 0;

const changeScale = (evt) => {
  scaleValue = Number(scaleValueElement.value.slice(0, scaleValueElement.value.length-1));
  switch (evt.target) {
    case zoomOut:
      scaleValue-=SCALE_STEP;
      break;
    case zoomIn:
      scaleValue+=SCALE_STEP;
      break;
  }
  if (scaleValue > 100) {
    scaleValue = 100;
  } else if (scaleValue < 0) {
    scaleValue = 0;
  }
  imagePreviewElement.style.transform = `scale(${scaleValue/100})`;
  scaleValueElement.value = `${scaleValue}%`;
};


export {changeScale};
