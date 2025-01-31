import UserDTO from './UsuarioDTO';

export default class LoginRegisterResponseDTO {
  usuario: UserDTO;
  token: string;

  constructor(usuario: UserDTO, token: string) {
    this.token = token;
    this.usuario = usuario;
  }
}
