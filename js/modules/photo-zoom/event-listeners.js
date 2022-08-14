import {changeScale} from './change-scale.js';

const onZoomInClick = (evt) => changeScale(evt);
const onZoomOutClick = (evt) => changeScale(evt);

export {
  onZoomInClick,
  onZoomOutClick,
};
