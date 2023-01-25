import axios from 'axios'

const defaultConfig = {
    baseURL: "https://localhost:7290/v1",
    responseType: "json",
    headers: {
        "Content-Type": "application/json"
    }
}

const axiosInstance = axios.create(defaultConfig)

axiosInstance.interceptors.request.use((config) => {

    return config;
}, (error) => {
    return Promise.reject(error)
})

const retried = {}

axiosInstance.interceptors.response.use((response) => {
    return response
}, (errorResponse) => {
    console.log(errorResponse);

    return Promise.reject(errorResponse);
})

const _get = (url, queryParams) => {
    return axiosInstance.get(url, { params: queryParams });
}

const _post = (url, body, queryParams) => {
    return axiosInstance.post(url, body, { params: queryParams })
}

const _put = (url, body, queryParams) => {
    return axiosInstance.put(url, body, { params: queryParams })
}

const _delete = (url) => {
    return axiosInstance.delete(url)
}

export const httpClient = {
    get: _get,
    post: _post,
    put: _put,
    delete: _delete
}