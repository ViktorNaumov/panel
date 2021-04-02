import * as axios from "axios";

export const setHolders = (value) => {
  return axios.post("http://localhost:3012/api/set/holders",{value})
};

// http://37.77.104.65:8080

export const setstock =(value)=>{
  return axios.post("http://localhost:3012/api/set/stock",{value})
}