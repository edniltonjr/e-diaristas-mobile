import axios from "axios";

const url = "https://ediaristas-workshop.herokuapp.com";
const urlLocal = "http://127.0.0.1:8000";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
