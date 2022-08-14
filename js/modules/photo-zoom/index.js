import {
  zoomOut,
  zoomIn,
} from './dom-elements.js';
import {
  onZoomOutClick,
  onZoomInClick,
} from './event-listeners.js';

zoomOut.addEventListener('click', onZoomOutClick);
zoomIn.addEventListener('click', onZoomInClick);
