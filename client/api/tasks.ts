import { CompleteTask, Create, Update } from "./interfaces";
import { api } from "./url";

export const getTasks = async (projectId: string) => {
  const response = await api.get(`/projects/${projectId}/tasks`);
  return response.data;
};

export const createTask = async (projectId: string, taskData: Create) => {
  const response = await api.post(`/projects/${projectId}/tasks`, taskData);
  return response.data;
};

export const updateTask = async (projectId: string, taskId: string, taskData: Update) => {
  const response = await api.put(`/projects/${projectId}/tasks/${taskId}`, taskData);
  return response.data;
};

export const completeTask = async (projectId: string, taskId: string, taskData: CompleteTask) => {
  const response = await api.put(`/projects/${projectId}/tasks/${taskId}`, taskData);
  return response.data;
};

export const deleteTask = async (projectId: string, taskId: string) => {
  const response = await api.delete(`/projects/${projectId}/tasks/${taskId}`);
  return response.data;
};