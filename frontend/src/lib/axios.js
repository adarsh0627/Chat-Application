import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("❌ VITE_API_URL is NOT defined in this build");
}

export const axiosInstance = axios.create({
  baseURL: `${apiUrl}/api`,
  withCredentials: true,
});
