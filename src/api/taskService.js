import axiosInstance from "./axiosInstance";

const TaskService = {
  getAllTasks: () => axiosInstance.get(`/tasks`),
  createTask: (data) => axiosInstance.post("/tasks", data),
  getSingleTask: (id) => axiosInstance.get(`/tasks/${id}`),
  updateTask: (id, data) => axiosInstance.put(`/tasks/${id}`, data),
  deleteTask: (id) => axiosInstance.delete(`/tasks/${id}`),
};

export default TaskService;
