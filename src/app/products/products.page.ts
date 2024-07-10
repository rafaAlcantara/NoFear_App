import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  private _id_produto: number = 0
  public img: any;
  public produto: any;
  public tamanho: any;
  public cor: any;
  public marca: any;
  public preco: any;
  public descricao: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _produtoService: ProdutoService
  ) { }

  ionViewWillEnter() {
    this._activatedRoute.params.subscribe((data:any) => {
      this._id_produto = data.id
    })

    this.getProduto()
    
  }

  ngOnInit() {
  }

  getProduto() {
    this._produtoService.getProduto(this._id_produto).subscribe((data:any) => {
      if(data['status'] == 'success') {
        console.log(data)
        this.img = data['produto']['img'],
        this.produto = data['produto']['produto'],
        this.tamanho = data['produto']['tamanho'],
        this.cor = data['produto']['cor'],
        this.marca = data['produto']['marca'],
        this.preco = data['produto']['preco'],
        this.descricao = data['produto']['descricao']

      }
    })

  }

  btnWhatsapp() {
    var mensagem = "Olá! Gostaria de mais informações sobre este produto: \n";
    mensagem += "*" + this.produto + "* - R$" + this.preco + "* \n"
    mensagem += this.marca + " - " + this.tamanho + " - " + this.cor + " \n"

    window.open('https://wa.me/5512991739700?text='+mensagem, '_blank');
  }

}
