import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    common: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = Cookies.get("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;

    if (error.response && error.response.status === 401) {
      const refreshToken = Cookies.get("brandkitRefresh");
      const cookieJar = Cookies.get();
      for (const cookieName in cookieJar) {
        // Remove each cookie one by one
        Cookies.remove(cookieName);
      }
      window.location.href = "/sign-in?cb=" + window.location.pathname;

      return Promise.reject(error);
    }

    return Promise.reject(error.response);
  }
);

export default axiosInstance;
