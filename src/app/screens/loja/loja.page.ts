import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage implements OnInit {

  public produtos: any[] = []

  constructor(
    private _produtoService:ProdutoService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getProdutos()
  }


  getProdutos(){
    this.produtos = []
    this._produtoService.getProdutos().subscribe((data:any)=>{
      if(data["status"]=="success"){
        data["produto"].forEach((element:any) => {
          this.produtos.push(element)
        });
      }
    })
  }

  getProdutosBusca(event: any){
    this.produtos = []
    this._produtoService.getProdutoBusca(event.detail['value']).subscribe((data:any)=>{
      if(data["status"]=="success"){
        data["produto"].forEach((element:any) => {
          this.produtos.push(element)
        });
      }
    })
  }

  getProduto(pk_id: number){
    this._router.navigate(['/products/' + pk_id])
  }
  
}
