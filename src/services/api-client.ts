import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c4eafd3e2aec4e47b65a4a849f5a3793",
    },
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data.results);
    };

    get = (id: number | string) => {
        return axiosInstance
            .get<T>(this.endpoint + "/" + id)
            .then(res => res.data);
    };
}

export default APIClient;
