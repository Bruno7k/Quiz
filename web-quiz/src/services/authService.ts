import axios from "axios";
import UserDTO from "../models/UserDTO";
import LoginRegisterResponseDTO from "../models/LoginRegisterResponseDTO";
import LoginRequestDTO from "../models/LoginRequestDTO";

const API_URL = "http://localhost:8080/usuario";

function registerUser(user: UserDTO): Promise<LoginRegisterResponseDTO> {
  return axios
    .post(`${API_URL}/salvar`, user)
    .then((response) => response.data);
}

function loginUser(login: LoginRequestDTO): Promise<LoginRegisterResponseDTO> {
  return axios
    .post(`${API_URL}/logar`, login)
    .then((response) => response.data);
}

export { registerUser, loginUser };
