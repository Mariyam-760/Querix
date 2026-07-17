import API from "./api";

export const testConnection = (data) =>
  API.post("/database/test", data);

export const saveConnection = (data) =>
  API.post("/connections", data);

export const getConnections = () =>
  API.get("/connections");

export const deleteConnection = (id) =>
  API.delete(`/connections/${id}`);

export const activateConnection = (id) =>
  API.put(`/connections/activate/${id}`);

export const updateConnection = (id, data) =>
  API.put(`/connections/${id}`, data);