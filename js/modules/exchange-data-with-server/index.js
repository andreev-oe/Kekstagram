const getDataFromServer = async () => {
  const response = await fetch('https://26.javascript.pages.academy/kekstagram/data');
  return await response.json();
};

export {getDataFromServer};
