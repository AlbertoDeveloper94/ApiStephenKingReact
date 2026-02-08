import axios from "axios";

const stephenKingApi = axios.create({
  baseURL: "https://stephen-king-api.onrender.com/api",
});

export const getBooks = () => stephenKingApi.get("/books");
