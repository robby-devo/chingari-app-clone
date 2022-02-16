import axios from "axios";

const instance = axios.create({
  baseURL: "https://back-chingari-mern.herokuapp.com/",
});

export default instance;
