import {photoFilterPanelElement} from '../main-page-filter/domElements.js';

const createMiniatures = async (data) => {
  try {
    const miniatures = await data;
    miniatures.forEach((miniature) => {
      const pictureTemplateElement = document.querySelector('#picture').content.cloneNode(true);
      const pictureElement = pictureTemplateElement.querySelector('.picture__img');
      const pictureCommentsElement = pictureTemplateElement.querySelector('.picture__comments');
      const pictureLikesElement = pictureTemplateElement.querySelector('.picture__likes');
      const picturesElement = document.querySelector('.pictures');
      pictureElement.src = miniature.url;
      pictureLikesElement.textContent = miniature.likes;
      pictureCommentsElement.textContent = miniature.comments.length;
      pictureElement.dataset.photoId = miniature.id;
      picturesElement.append(pictureTemplateElement);
    });
    photoFilterPanelElement.classList.remove('img-filters--inactive');
  } catch (e) {
    throw new Error(`Нет данных для обработки, текст ошибки: ${e}`);
  }
};

export {createMiniatures};
