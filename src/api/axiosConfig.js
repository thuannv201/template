import axios from "axios";

const AUTH_TOKEN = "Bearer " + localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export default axiosInstance;
