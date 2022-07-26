import {createMiniaturesData} from '../test-data/index.js';
import {createMiniatures} from './createMiniatures.js';

const miniatures = createMiniaturesData();

miniatures.forEach((miniature) => createMiniatures(miniature));

export {miniatures};
