import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muay-thai-grupo',
  templateUrl: './muay-thai-grupo.page.html',
  styleUrls: ['./muay-thai-grupo.page.scss'],
})
export class MuayThaiGrupoPage implements OnInit {
  public nome = window.localStorage.getItem('nome')

  public fotos: any[] = [
    {
      "img": "/assets/img/turma-01.jpeg",
    },
    {
      "img": "/assets/img/turma-02.jpeg",
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
