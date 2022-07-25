const createMiniatures = (miniature) => {
  const pictureTemplateElement = document.querySelector('#picture').content.cloneNode(true);
  const pictureElement = pictureTemplateElement.querySelector('.picture__img');
  const pictureCommentsElement = pictureTemplateElement.querySelector('.picture__comments');
  const pictureLikesElement = pictureTemplateElement.querySelector('.picture__likes');
  const picturesElement = document.querySelector('.pictures');
  pictureElement.src = miniature.url;
  pictureLikesElement.textContent = miniature.likes;
  pictureCommentsElement.textContent = miniature.comments.message.length;
  return picturesElement.append(pictureTemplateElement);
};

export {createMiniatures};
