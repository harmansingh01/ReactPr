//fa558eb6ad066c05d9831a3dd52ab56a
import * as axios from "jquery";

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=fa558eb6ad066c05d9831a3dd52ab56a&units=metric";
const getTemp = function (location) {
  let encodedLocation = encodeURIComponent(location);
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return axios.get(requestUrl).then(function (response) {
    if (response.main.cod && response.main.message) {
      throw new Error(response.data.message);
    }
    else {
      return response.main.temp;
    }
  }, function (response) {
    throw new Error(response.data.message);
  });
};

export {
  getTemp
}