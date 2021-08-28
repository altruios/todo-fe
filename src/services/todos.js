import axios from "axios";
const baseUrl = "http://localhost:8000/todos";

const getAll = () => {
  const request = axios.get(`${baseUrl}`);

  return request.then((response) => response.data);
};

const create = (todoTitle) => {
  const request = axios.post(`${baseUrl}`, { title: todoTitle });

  return request.then((response) => response.data);
};

const update = (id, updatedTodo) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedTodo);

  return request.then((response) => response.data);
};

const todoService = {
  getAll,
  create,
  update,
};

export default todoService;
