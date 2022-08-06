import {createMiniatures} from './createMiniatures.js';
import{getDataFromServer} from '../exchange-data-with-server/index.js';

const photoData = getDataFromServer();
photoData.then((miniatures) => miniatures.forEach((miniature) => createMiniatures(miniature)));

export {photoData};
