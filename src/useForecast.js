import { useEffect } from "react";

export const useForecast = (api, city, setForecast, extractSingleRecordPerDay) => {

    useEffect(()=> {
        fetch(`${api.base}forecast?id=${city}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) =>
          result.cod == 200
            ? setForecast(extractSingleRecordPerDay(result))
            : console.log(result)
        )
        .catch((error) => console.log(error.message));
    },[city])

  };