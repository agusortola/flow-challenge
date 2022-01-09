import { useEffect } from "react";

export const useWeather = (api, city, setWeather) => {
  useEffect(() => {
    city !== undefined &&
    fetch(`${api.base}weather?id=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) =>
        result.cod == 200 ? setWeather(result) : console.log(result)
      )
      .catch((error) => console.log(error.message));
  }, [city]);
};
