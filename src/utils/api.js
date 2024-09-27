import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});
