import {showBigPicture} from './showBigPicture.js';
import {commentsLoaderElement, picturesContainerElement} from './domElements.js';
import {onShowMoreCommentsButtonClick} from './eventListeners.js';

picturesContainerElement.addEventListener('click', showBigPicture);
commentsLoaderElement.addEventListener('click', onShowMoreCommentsButtonClick);
