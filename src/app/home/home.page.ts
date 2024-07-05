import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nome = window.localStorage.getItem('nome')

  public fotos: any[] = [
    {
      "img": "/assets/img/turma-01.jpeg",
    },
    {
      "img": "/assets/img/turma-02.jpeg",
    },
    {
      "img": "/assets/img/turma-03.jpeg",
    },
    {
      "img": "/assets/img/turma-04.jpeg",
    },
  ]

  constructor(
    private _router: Router,
    public alertController: AlertController,

  ) {  }

  
 

}
