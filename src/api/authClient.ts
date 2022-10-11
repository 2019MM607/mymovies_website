import axios from "axios";

export const authClient = axios.create({
    baseURL: "https://reqres.in/api/login",
})