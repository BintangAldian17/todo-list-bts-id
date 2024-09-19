import axios from "axios";

const BASE_URL = 'http://94.74.86.174:8080/api'

export const api = axios.create({
    baseURL: BASE_URL
})