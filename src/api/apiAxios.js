import axios from "axios";

export const apiAxios = axios.create({
    baseURL: "https://json-api.uz/api/project/create-user",
})
