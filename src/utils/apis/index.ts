import axios from "axios";

export const instace = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});
