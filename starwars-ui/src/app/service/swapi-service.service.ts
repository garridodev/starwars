import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/reponsePageable';

@Injectable({
  providedIn: 'root'
})
export class SwapiServiceService {

  apiUrl = 'https://swapi.dev/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpCliente: HttpClient
  ) { }

  public buscarListaPersonagem(){
    return this.httpCliente.get(this.apiUrl + '/people');
  }

  public pesquisarPersonagemPorTexto(textoPesquisa: string) {
    return this.httpCliente.get(this.apiUrl + '/people/?search=' + textoPesquisa);
  }

  public buscarListaPersonagemPorPagina(url: string) {
    return this.httpCliente.get(url);
  }
  // public getPersonagensPorNome(flag: string): Observable<ResponsePageable> {
  //   return this.httpCliente.get<ResponsePageable>(this.apiUrl + '/personagens')
  // }
}
