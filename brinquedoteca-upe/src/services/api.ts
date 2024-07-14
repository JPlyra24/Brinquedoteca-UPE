import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

const getToken = () => {
  return Cookies.get("token");
};

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`, // Include the token in the Authorization header
  },
});
