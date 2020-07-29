import axios from "axios";
const baseURL = "http://localhost:3001/notes";

const getAll = () => {
  return axios.get(baseURL).then(res => res.data);
};

const create = (newObj) => {
  return axios.post(baseURL, newObj).then(res => res.data);
};

const update = (id, newObj) => {
  return axios.put(`${baseURL}/${id}`, newObj).then(res => res.data);
};

export default {
  getAll,
  create,
  update,
};
