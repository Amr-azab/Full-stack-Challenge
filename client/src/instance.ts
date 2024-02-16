import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8000/api/quizzes",
  withCredentials: true,
});

export default instance;
