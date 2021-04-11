import * as axios from "axios";

export const setHolders = (value) => {
  return axios.post("http://localhost:3012/api/set/holders", { value });
};

// http://37.77.104.65:8080

export const setstock = (value) => {
  return axios.post("http://localhost:3012/api/set/stock", { value });
};

export const setOrderPayment = (value) => {
  return axios.post("http://localhost:3012/api/set/orderpayment", { value });
};

export const setDataRequest = (value) => {
  return axios.post("http://localhost:3013/api/set/datarequest", { value });
};



export const getThickness = (value) => {
  return axios.post("http://localhost:3012/api/get/thickness", { value });
};

export const getSteel = (value) => {
  return axios.post("http://localhost:3012/api/get/steel", { value });
};

export const getNameholder = (value) => {
  return axios.post("http://localhost:3012/api/get/nameholder", { value });
};

export const getOrder = (value) => {
  return axios.post("http://localhost:3012/api/get/order", { value });
};

export const getOrderCost = (value) => {
  return axios.post("http://localhost:3012/api/get/ordercost", { value });
};

export const getOrderPayment = (value) => {
  return axios.post("http://localhost:3012/api/get/orderpayment", { value });
};

export const getRequest = (value) => {
  return axios.post("http://localhost:3012/api/get/request", { value });
};

export const getDataRequest = (value) => {
  return axios.post("http://localhost:3012/api/get/datarequest", { value });
};

