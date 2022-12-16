import axios from "axios";

export const movieClient = axios.create({
  baseURL: import.meta.env.VITE_API_MOVIES,
  params: {
    api_key: "e49d12e9045c1d84386d348c7dc2d991",
  },
});
