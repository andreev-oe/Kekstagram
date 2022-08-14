import {createMiniatures} from './create-miniatures.js';
import{getDataFromServer} from '../exchange-data-with-server/index.js';

const photoData = getDataFromServer();
createMiniatures(photoData);

export {photoData};
