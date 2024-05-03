import axiosInstance from "./request-adapter";

export const signUp = (data) => axiosInstance.post(`auth/signup`, data);

export const signIn = (data) => axiosInstance.post(`auth/login`, data);

export const bvnSearch = (data) => axiosInstance.post(`kyc/verify-bvn`, data);
