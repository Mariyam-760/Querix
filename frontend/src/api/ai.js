import API from "./api";

export const generateSQL = (question) =>
  API.post("/ai/generate-sql", {
    question,
  });