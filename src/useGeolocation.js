import { useEffect } from "react/cjs/react.development";

export const useGeolocation = (api, extractSingleRecordPerDay, geolocation, setWeather) => {
      useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            let userLat = position.coords.latitude;
            let userLon = position.coords.longitude;
            fetch(
              `${api.base}weather?lat=${userLat}&lon=${userLon}&units=metric&APPID=${api.key}`
            )
              .then((res) => res.json())
              .then((result) =>
                result.cod == 200 ? setWeather(result) : console.log(result)
              )
              .catch((error) => console.log(error.message));
              
            fetch(
              `${api.base}forecast?lat=${userLat}&lon=${userLon}&units=metric&APPID=${api.key}`
            )
              .then((res) => res.json())
              .then((result) => {
                result.cod == 200
                  ? extractSingleRecordPerDay(result)
                  : console.log(result).catch((error) => console.log(error.message));
              });
          });
      },[geolocation])
}