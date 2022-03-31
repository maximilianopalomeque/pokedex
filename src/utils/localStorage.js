export const saveInLocalStorage = (data) => {
  localStorage.setItem("pokemon-data", JSON.stringify(data));
};

export const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("pokemon-data"));
  return data;
};
