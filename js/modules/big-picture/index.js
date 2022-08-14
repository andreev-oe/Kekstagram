import {showBigPicture} from './show-big-picture.js';
import {commentsLoaderElement, picturesContainerElement} from './dom-elements.js';
import {onShowMoreCommentsButtonClick} from './event-listeners.js';

picturesContainerElement.addEventListener('click', showBigPicture);
commentsLoaderElement.addEventListener('click', onShowMoreCommentsButtonClick);
