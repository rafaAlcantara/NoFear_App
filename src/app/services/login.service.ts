import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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

  getLogin(email: string, password: string) {
    // CONSTRÓI O CAMINHO FINAL = localhost + parâmetros
    const endpoint = this._url + "?email=" + email + "&senha=" + btoa(password)
    // RETORNA OS DADOS DA API_BACK
    return this._httpClient.get(endpoint, this._httpOptions)
  }

}
