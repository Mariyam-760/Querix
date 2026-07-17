import API from "./api";

export const getTables = () =>
  API.get("/schema/tables");

export const getColumns = (table) =>
  API.get(`/schema/columns/${table}`);