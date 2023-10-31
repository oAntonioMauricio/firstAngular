import {Component, OnInit} from '@angular/core';
import {Livro} from "src/data/dados_livraria/livros";
import {LivrosService} from "../services/livros.service";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  livros: Livro[] = [];

  constructor(private livrosService: LivrosService) {

  }

  ngOnInit(): void {
    this.livrosService.getLivros().subscribe((livros) => {
      console.log({"livros da API": livros})
      this.livros = livros;
    })
  }

}
