import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  private pk_id: number = 0
 // VARIÁVEIS PARA ARMAZENAR INFORMAÇÕES DO PRODUTO
  public produto: string = ""
  public video_aula: string = ""
  public cor: string = ""
  public marca: string = ""
  public tamanho: string = ""
  public preco: number = 0
  //public img: string = ""
  

  constructor(
    private _router: Router,
    public alertController: AlertController,
    private _activatedRoute: ActivatedRoute,
    private _produto: ProdutoService
  ) {
    // if (window.localStorage.getItem('autorizado') != 'true') {
    //   this.presentAlert('Ops!', 'Realize o login primeiro')  
    //   this._router.navigate(['./login'])
    //   return
    // }

    // PEGAR OS PARÂMETROS ENVIADOS NA ROTA
    this._activatedRoute.params.subscribe((data: any) => {
      this.pk_id = data['id']
    })

  }

  getProduto(pk_id: number) {
    this._produto.getProduto(pk_id).subscribe((data: any) => {
      if (data['status'] == 'success') {
        this.produto = data['produtos']['produto']
        //this.video_aula = data['produtos']['video_aula']
        this.cor = data['produtos']['cor']
        this.marca = data['produtos']['marca']
        this.tamanho = data['produtos']['tamanho']
        this.preco = data['produtos']['valor']
         //this.img = data['produtos']['img']

      } else {
        this.presentAlert('Ops!', 'Produto não encontrado.')
        this._router.navigate(['./home'])
      }
    })
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }

  ngOnInit() {
    // this.getProduto(this._pk_produto)
  }

}
