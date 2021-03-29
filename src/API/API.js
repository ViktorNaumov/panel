import * as axios from "axios";

export const setHolders = () => {
  return axios.post("http://37.77.104.65:8080/api/set/holders")
};
