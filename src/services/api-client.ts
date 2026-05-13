import axios, { type AxiosInstance } from "axios";

export const firstapiClient: AxiosInstance = axios.create({
    baseURL: "https://69925e0b8f29113acd3db7fa.mockapi.io/",
    timeout: 3000,
});

export const secondapiClient: AxiosInstance = axios.create({
    baseURL: "https://6993ab5dfade7a9ec0f3356a.mockapi.io/",
    timeout: 3000,
});

export const thirdapiClient: AxiosInstance = axios.create({
    baseURL: "https://69c8747d68edf52c954dc88b.mockapi.io/",
    timeout: 3000,
});

export const forthapiClient: AxiosInstance = axios.create({
    baseURL: "https://69cc93e1ddc3cabb7bd14a19.mockapi.io/",
    timeout: 3000,
});

firstapiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

secondapiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

thirdapiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

forthapiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);
