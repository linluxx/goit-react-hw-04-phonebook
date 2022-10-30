export const localStorageGet = key => {
  JSON.parse(localStorage.getItem(key));
};

export const localStorageSet = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};
