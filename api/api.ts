import axios from "axios";
import { appInfo } from "../constants/appInfo";

export const api = axios.create({
  baseURL: appInfo.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: appInfo.API_TIMEOUT,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
