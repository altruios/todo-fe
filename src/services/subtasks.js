import axios from "axios";
const baseUrl = "http://localhost:8000/subtasks";

const create = (subtaskTitle, todoId) => {
  const request = axios.post(`${baseUrl}`, {
    title: subtaskTitle,
    todo_id: todoId,
  });

  return request.then((response) => response.data);
};

const update = (id, updatedSubtask) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedSubtask);

  return request.then((response) => response.data);
};

const subtaskService = {
  create,
  update,
};

export default subtaskService;
