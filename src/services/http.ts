import axios, { isCancel, AxiosRequestConfig } from "axios";

const http = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_APP_API_KEY,
  },
});

export { isCancel };
export type { AxiosRequestConfig };

export default http;
