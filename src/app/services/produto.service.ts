import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private _url: string = "http://localhost/api_back_projeto/produto/";

  private _httpOptions = {
    headers: new HttpHeaders({ 
      'Content-type': 'application/json',
      'Authorization' : 'b83e3213cac3'
    })
  };

  constructor(
    private _httpClient: HttpClient
  ) { }
  
  getProduto(pk_id: number) {
    // CONSTRÓI O CAMINHO FINAL = localhost + parâmetros
    const endpoint = this._url + '?id=' + pk_id
    // RETORNA OS DADOS DA API_BACK
  
    return this._httpClient.get(endpoint, this._httpOptions)
  }

  getProdutoBusca(busca: string) {
    // CONSTRÓI O CAMINHO FINAL = localhost + parâmetros
    const endpoint = this._url + '?busca=' + busca
    // RETORNA OS DADOS DA API_BACK
  
    return this._httpClient.get(endpoint, this._httpOptions)
  }

  getProdutos() {
    // CONSTRÓI O CAMINHO FINAL = localhost + parâmetros
    const endpoint = this._url
    // RETORNA OS DADOS DA API_BACK
    return this._httpClient.get(endpoint, this._httpOptions)
  }
}
