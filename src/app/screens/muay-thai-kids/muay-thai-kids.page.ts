import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muay-thai-kids',
  templateUrl: './muay-thai-kids.page.html',
  styleUrls: ['./muay-thai-kids.page.scss'],
})
export class MuayThaiKidsPage implements OnInit {
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
