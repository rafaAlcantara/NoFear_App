import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muay-thai-personal',
  templateUrl: './muay-thai-personal.page.html',
  styleUrls: ['./muay-thai-personal.page.scss'],
})
export class MuayThaiPersonalPage implements OnInit {
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
