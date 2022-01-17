import * as axios from "axios";
axios.defaults.baseUrl = '"http://3.84.28.223:8086/"';

axios.interceptors.request.use(
    config => {
        if (!config.headers.Authorization) {
            const token = JSON.parse(localStorage.getItem("keyCloak")).token;

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    error => Promise.reject(error)
);