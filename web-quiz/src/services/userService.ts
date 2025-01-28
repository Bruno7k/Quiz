import UserDTO from "../models/UserDTO";
import api from "./axiosConfig";

/**
 * Serviço de usuário.
 */

function listarUsuarios(): Promise<UserDTO[]> {
  return api.get("/usuario");
}

function buscarUsuario(id: number): Promise<UserDTO> {
  return api.get(`/usuario/obter/${id}`).then((response) => response.data);
}

function atualizarUsuario(id: number, user: UserDTO): Promise<UserDTO> {
  return api.put(`/usuario/${id}`, user).then((response) => response.data);
}

function deletarUsuario(id: number): Promise<void> {
  return api.delete(`/usuario/${id}`);
}

export { listarUsuarios, buscarUsuario, atualizarUsuario, deletarUsuario };
