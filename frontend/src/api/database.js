import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const testConnection = (data) =>
  API.post("/database/test", data);

export const saveConnection = (data) =>
  API.post("/connections", data);

export const getConnections = () =>
  API.get("/connections");

export const deleteConnection = (id) =>
  API.delete(`/connections/${id}`);

export const activateConnection = (id) => {
  return API.put(
    `/connections/activate/${id}`
  );
};

export const updateConnection = (id, data) => {
  return API.put(`/connections/${id}`, data);
};