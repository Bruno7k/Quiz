import { Injectable } from '@angular/core';
import { BaseHttpService } from '../baseHttp/base-http.service';
import configuracao from '../../../util/configuracao';
import { Observable } from 'rxjs';
import UsuarioDTO from '../../../models/UsuarioDTO';
import { HttpParams } from '@angular/common/http';
import LoginRequestDTO from '../../../models/LoginRequestDTO';
import LoginRegisterResponseDTO from '../../../models/LoginRegisterResponseDTO';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends BaseHttpService {
  private urlBase = configuracao.api_url + '/usuario';

  listar(): Observable<UsuarioDTO[]> {
    return this.get<UsuarioDTO[]>(this.urlBase + '/listar');
  }

  obter(id: number): Observable<UsuarioDTO> {
    const httpParams = new HttpParams().set('id', id.toString());
    return this.get<UsuarioDTO>(this.urlBase + '/obter', httpParams);
  }

  obterLogado(): Observable<UsuarioDTO> {
    return this.get<UsuarioDTO>(this.urlBase + '/obterLogado');
  }

  salvar(usuario: UsuarioDTO): Observable<LoginRegisterResponseDTO> {
    return this.post(this.urlBase + '/salvar', usuario);
  }

  logar(login: LoginRequestDTO): Observable<LoginRegisterResponseDTO> {
    return this.post(this.urlBase + '/logar', login);
  }

  atualizar(usuario: UsuarioDTO): Observable<UsuarioDTO> {
    return this.put(this.urlBase + '/atualizar', usuario);
  }

  deletar(): Observable<any> {
    return this.delete(this.urlBase + '/deletar');
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  setAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
