const api = {
  key: "e9c3093e11a466030601670b5ad691ef",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const get = (endpoint, successCallback, errorCallback) => {
  fetch(`${api.base}${endpoint}&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      if (result.cod == 200) {
        successCallback(result);
      } else {
        throw new Error(result.message);
      }
    })
    .catch((error) => errorCallback(error));
};
