import { Component, OnInit } from '@angular/core';
import { Personagem } from '../model/personagem';
import { SwapiServiceService } from '../service/swapi-service.service';

@Component({
  selector: 'app-lista-personagens',
  templateUrl: './lista-personagens.component.html',
  styleUrls: ['./lista-personagens.component.css']
})
export class ListaPersonagensComponent implements OnInit {

  dados: any;
  contador: number = 1;

  constructor(
    public swapiService: SwapiServiceService
  ) { }

  ngOnInit(): void {
    this.buscarPersonagens();
  }

  buscarPersonagens() {
    this.swapiService.buscarListaPersonagem().subscribe(
      (dados: any) => {
        console.log(dados)
        this.dados = dados;
      }
    )
  }

  pesquisarPersonagem(texto: string) {
    console.log(texto);
    this.swapiService.pesquisarPersonagemPorTexto(texto).subscribe(
      (dados: any) => {
        this.dados = dados;
      }
    )
  }

  proximaPagina() {
    this.swapiService.buscarListaPersonagemPorPagina(this.dados.next).subscribe(
      (dados) => {
        this.dados = dados;
        this.contador += 1;
      }
    )
  }

  anteriorPagina() {
    this.swapiService.buscarListaPersonagemPorPagina(this.dados.previous).subscribe(
      (dados) => {
        this.dados = dados;
        this.contador -= 1;
      }
    )
  }

}
