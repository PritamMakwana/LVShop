/**
 * Created by Zura on 12/25/2021.
 */
import axios from "axios";
import store from "./store";
import router from "./router/index.js";

// 1️ Create Axios instance
// baseURL comes from .env
const axiosClient = axios.create({
    //   baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
    baseURL: `http://127.0.0.1:8000/api`
})

// 2️ Request Interceptor
// Runs before every request
axiosClient.interceptors.request.use(config => {
    // Add Authorization header if user token exists
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config;
})

// 3️ Response Interceptor
// Runs on every response or error
axiosClient.interceptors.response.use(response => {
    // Normal success → just return
    return response;
}, error => {
    // If token expired or unauthorized → logout and redirect to login
    if (error.response.status === 401) {
        store.commit('setToken', null)
        router.push({ name: 'login' })
    }
    // Always throw so your component can catch
    throw error;
})

export default axiosClient;
