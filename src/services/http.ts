import axios, { isCancel, AxiosRequestConfig } from "axios";

const http = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "53876516b386461abfda36a814eb506f",
  },
});

export { isCancel };
export type { AxiosRequestConfig };

export default http;
