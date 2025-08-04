import axios from "axios";
import axiosInstance from "./axiosInstance";

const TaskService = {
  getAllTasks: (page = 1, limit = 10) =>
    axiosInstance.get(`/tasks?page=${page}&limit=${limit}`),
  searchTaskbyTitleAndStatus: (title, status) =>
    axiosInstance.get(
      `/tasks/search?title=${encodeURIComponent(
        title
      )}&status=${encodeURIComponent(status)}`
    ),
  createTask: (data) => axiosInstance.post("/tasks", data),
  getSingleTask: (id) => axiosInstance.get(`/tasks/${id}`),
  updateTask: (id, data) => axiosInstance.put(`/tasks/${id}`, data),
  deleteTask: (id) => axiosInstance.delete(`/tasks/${id}`),
};

export default TaskService;
