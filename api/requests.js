import axiosInstance from "./request-adapter";

export const signUp = (data) => axiosInstance.post(`auth/signup`, data);

export const signIn = (data) => axiosInstance.post(`auth/login`, data);

export const signOut = () => axiosInstance.post(`auth/logout`);

export const verifyKYC = (data) => axiosInstance.post(`kyc/verify-bvn`, data);

export const getProfile = () => axiosInstance.get("profile/get-profile");

export const checkEligbility = (data) =>
  axiosInstance.post("loan/check-eligibility", data);
