import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
})
export class ProfessoresPage implements OnInit {


  public professores: any[] = [
    {
      "nome": "Isaías",
      "descricao": "Treinador e dono Sed ut perspiciatis, us error sit voluptatem accusa laudantium, totam rem ",
      "img": "/assets/img/isaias.jpg",
    },
    {
      "nome": "Treinador",
      "descricao": "Treinador e dono Sed ut perspiciatis, us error sit voluptatem accusa laudantium, totam rem ",
      "img": "/assets/img/isaias.jpg",
    },
    {
      "nome": "Treinador",
      "descricao": "Treinador e dono Sed ut perspiciatis, us error sit voluptatem accusa laudantium, totam rem ",
      "img": "/assets/img/isaias.jpg",
    },
   
  ]





  constructor() { }

  ngOnInit() {
  }

}
