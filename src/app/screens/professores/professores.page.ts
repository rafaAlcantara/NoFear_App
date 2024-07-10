import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
})
export class ProfessoresPage implements OnInit {


  public professores: any[] = [
    // {
    //   "nome": "Isaías",
    //   "descricao": "Me chamo Isaias Simoes, Dono da Equipe NoFear e da Marca NF. Tenho 27 anos e Desde os meus 15/16 anos eu treino Arte Marcial. Competindo pela primeira vez aos 18. Abri minha academia de Muaythai assim que lutei pela primeira vez. No Começo minha ideia era de apenas ter uma marca de artigos de arte marcial, porem depois que de uma entrevista que teve na minha escola, a propia diretora forneceu um espaço na propia escola para mim estar começando a dar aula. ",
    //   "img": "/assets/img/isaias.jpg",
    // },
    {
      "nome": "Matheus Lacerda",
      "descricao": "Sou o Treinador Matheus Lacerda e faço parte da Equipe NoFear de Muay Thai! ",
      "img": "/assets/img/matheus.jpg",
    },
    {
      "nome": "Gabriel Ferreira",
      "descricao": "Sou o Treinador Gabriel Ferreira e faço parte da Equipe NoFear de Muay Thai!",
      "img": "/assets/img/gabriel.jpg",
    },
   
  ]





  constructor() { }

  ngOnInit() {
  }

}
