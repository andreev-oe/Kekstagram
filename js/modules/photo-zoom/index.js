import {
  zoomOut,
  zoomIn,
} from './domElements.js';
import {
  onZoomOutClick,
  onZoomInClick,
} from './eventListeners.js';

zoomOut.addEventListener('click', onZoomOutClick);
zoomIn.addEventListener('click', onZoomInClick);
