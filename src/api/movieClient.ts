import axios from "axios";

export const movieClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "e49d12e9045c1d84386d348c7dc2d991",
    },
})