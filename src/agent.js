import axios from "axios";

const API_ROOT = "https://api.spacexdata.com/v3";

const responseBody = (res) => res.data;

const headerPlugin = () => {
  let head = { headers: {} };
    head.headers["Content-Type"] = "application/json";
  return head;
};

const requests = {
  del: (url) =>
    axios.delete(`${API_ROOT}${url}`, headerPlugin()).then(responseBody),
  get: (url) =>
    axios.get(`${API_ROOT}${url}`, headerPlugin()).then(responseBody),
  put: (url, body) =>
    axios.put(`${API_ROOT}${url}`, body, headerPlugin()).then(responseBody),
  post: (url, body) =>
    axios.post(`${API_ROOT}${url}`, body, headerPlugin()).then(responseBody),
};

 
const Data = {
  get: ({limit = 10, offset = 0, sort = "launch_year", order = "desc"}) =>
    requests.get(`/launches?limit=${limit}&offset=${offset}&sort=${sort}&order=${order}`),
};

 

export default {
  Data: Data,
};
