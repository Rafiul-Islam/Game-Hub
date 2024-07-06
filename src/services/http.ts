import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const http = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_APP_API_KEY,
  },
});

class HttpServices<T> {
  apiEndPoint = "";

  constructor(apiEndPoint: string) {
    this.apiEndPoint = apiEndPoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    http
      .get<FetchResponse<T>>(this.apiEndPoint, config)
      .then((res) => res.data);

  getOne = (id: string | number) =>
    http.get<T>(`${this.apiEndPoint}/${id}`).then((res) => res.data);
}

export default HttpServices;
