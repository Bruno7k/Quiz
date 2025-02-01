import { Injectable } from '@angular/core';
import configuracao from '../../../util/configuracao';
import { Observable } from 'rxjs';
import PerguntaDTO from '../../../models/PerguntaDTO';
import { BaseHttpService } from '../baseHttp/base-http.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PerguntaService extends BaseHttpService {
  private urlBase = configuracao.api_url + '/pergunta';

  listar(): Observable<PerguntaDTO[]> {
    return this.get<PerguntaDTO[]>(this.urlBase + '/listar');
  }

  gerarQuestionario(): Observable<PerguntaDTO[]> {
    return this.get<PerguntaDTO[]>(this.urlBase + '/gerarQuestionario');
  }

  obter(id: number): Observable<PerguntaDTO> {
    const httpParams = new HttpParams().set('id', id.toString());
    return this.get<PerguntaDTO>(this.urlBase + '/obter', httpParams);
  }

  salvar(pergunta: PerguntaDTO) {
    return this.post(this.urlBase + '/salvar', pergunta);
  }

  atualizar(pergunta: PerguntaDTO): Observable<PerguntaDTO> {
    const httpParams = new HttpParams().set('id', pergunta.id!);
    return this.put<PerguntaDTO>(
      this.urlBase + '/atualizar',
      pergunta,
      httpParams
    );
  }

  deletar(id: number) {
    const httpParams = new HttpParams().set('id', id.toString());
    return this.delete(this.urlBase + '/deletar', httpParams);
  }
}
