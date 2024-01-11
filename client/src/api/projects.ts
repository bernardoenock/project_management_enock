import { Create, Update } from "./interfaces";
import { api } from "./url";

export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const createProject = async (projectData: Create) => {
  const response = await api.post('/projects', projectData);
  return response.data;
};

export const updateProject = async (projectId: string, projectData: Update) => {
  const response = await api.put(`/projects/${projectId}`, projectData);
  return response.data;
};

export const deleteProject = async (projectId: string) => {
  const response = await api.delete(`/projects/${projectId}`);
  return response.data;
};