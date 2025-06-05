import React from "react";
import AppRoutes from "./utilities/routers/AppRoutes.tsx";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['content-type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = token ? `Bearer ${token}` : "";
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

const App: React.FC = () => {
    return (
        <>
            <AppRoutes />
        </>
    );
};

export default App;
