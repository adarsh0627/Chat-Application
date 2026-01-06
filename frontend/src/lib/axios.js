import axios from "axios";

const DEMO_MODE = import.meta.env.VITE_DEMO_MODE === "true";

const axiosInstance = axios.create({
  baseURL: DEMO_MODE
    ? "" // no backend calls in demo
    : "https://chat-application-1-x4vb.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
