import axios from "axios";

const api = axios.create({ baseURL: process.env.api_url, proxy: false });

export default api;
