import {changeScale} from './changeScale.js';

const onZoomInClick = (evt) => changeScale(evt);
const onZoomOutClick = (evt) => changeScale(evt);

export {
  onZoomInClick,
  onZoomOutClick,
};
