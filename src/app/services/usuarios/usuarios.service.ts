import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private _url: string = "http://localhost/api_back/usuarios/";

  private _httpOptions = {
    headers: new HttpHeaders({ 
      'Content-type': 'application/json',
      'Authorization' : '77cbc1f93d7f'
    })
  };

  constructor(
    private _httpClient: HttpClient
  ) { }

  getUsuarios(pk_id: number) {
    // CONSTRÓI O CAMINHO FINAL = localhost + parâmetros
    const endpoint = this._url + '?id=' + pk_id
    // RETORNA OS DADOS DA API_BACK
    // JSON.Stringify = transforma o formulário HTML em JSON
    return this._httpClient.get(endpoint, this._httpOptions)
  }

  putUsuarios(form: any) {
    // CONSTRÓI O CAMINHO FINAL = localhost + parâmetros
    const endpoint = this._url
    // RETORNA OS DADOS DA API_BACK
    // JSON.Stringify = transforma o formulário HTML em JSON
    return this._httpClient.put(endpoint, JSON.stringify(form), this._httpOptions)
  }

}
