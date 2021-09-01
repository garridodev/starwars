import { Component, OnInit } from '@angular/core';
import { SwapiServiceService } from '../service/swapi-service.service';

@Component({
  selector: 'app-lista-personagens',
  templateUrl: './lista-personagens.component.html',
  styleUrls: ['./lista-personagens.component.css']
})
export class ListaPersonagensComponent implements OnInit {

  dados: any;
  contador: number = 1;
  personagemExibicao: any = null;
  totalPaginas!: number;
  textoDigitado: string = '';

  constructor(
    public swapiService: SwapiServiceService
  ) { }

  ngOnInit(): void {
    this.buscarPersonagens();
  }

  buscarPersonagens() {
    this.swapiService.buscarListaPersonagem().subscribe(
      (dados: any) => {
        this.dados = dados;
        this.totalDePaginas();
      }
    )
  }

  pesquisarPersonagem() {
    this.swapiService.pesquisarPersonagemPorTexto(this.textoDigitado).subscribe(
      (dados: any) => {
        this.dados = dados;
        this.totalDePaginas();
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

  exibirPersonagem(personagem: any) {
    this.personagemExibicao = personagem;
  }

  totalDePaginas() {
    if(Math.round(this.dados.count / 10) < 1) {
      this.totalPaginas = 1;
    } else {
      this.totalPaginas = Math.round(this.dados.count / 10);
    }
  }

  limparPesquisa() {
    this.personagemExibicao = null;
    this.textoDigitado = '';
    this.contador = 1;
    this.buscarPersonagens();
  }

}
