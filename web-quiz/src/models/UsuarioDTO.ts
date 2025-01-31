export default class UserDTO {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  permissao?: string;

  constructor(nome: string, email: string, senha: string, id?: number) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.permissao = 'USER';
  }
}
